import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { refresh, logout } from "./authSlice";
import { API_URL } from "shared/config";
import { Mutex } from "async-mutex";
import authApi from "./authApi";

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).authState.access;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    }
  },
});
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const token = (api.getState() as RootState).authState.refresh;
        if (token) {
          const refreshResult = await api.dispatch(
            authApi.endpoints.refresh.initiate(token)
          );
          if (refreshResult.data) {
            api.dispatch(refresh(refreshResult.data));
            result = await baseQuery(args, api, extraOptions);
          } else {
            api.dispatch(logout());
          }
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export default baseQueryWithReauth;
