import { api } from "shared/api";
import { IUser } from "shared/models";
import { AuthData, CredentialsType } from "../types";
import { logout, setUser } from "./authSlice";
import baseQueryWithReauth from "./baseQueryWithReauth";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthData, CredentialsType>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: (response) => {
        if (response) {
          return ["User"];
        }
        return [];
      },
    }),
    logout: build.mutation<"success", void>({
      async queryFn(_arg, queryApi, extraOptions, fetchBQ) {
        await fetchBQ({
          url: "logout",
          method: "POST",
          body: {
            refresh: (queryApi.getState() as RootState).authState.refresh,
          },
        });
        return {
          data: "success",
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(logout());
      },
    }),
    getUser: build.query<IUser, void>({
      async queryFn(_arg, queryApi, extraOptions) {
        const response = await baseQueryWithReauth(
          "user/current",
          queryApi,
          extraOptions
        );
        return {
          data: response.data as IUser,
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const response = await queryFulfilled;
        if (response.data) {
          dispatch(setUser(response.data));
        }
      },
      providesTags: ["User"],
    }),
    refresh: build.query<AuthData, AuthData["refresh"]>({
      query: (refresh) => ({
        url: "refresh",
        method: "POST",
        body: {
          refresh,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useGetUserQuery } = authApi;

export default authApi;
