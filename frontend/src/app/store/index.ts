import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "features/auth";
import { userApi } from "features/user/store";
import { api } from "shared/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [userApi.reducerPath]: userApi.reducer,
    authState: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware, userApi.middleware]),
});
