import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "shared/models";
import { AuthData } from "../types";
import authApi from "./authApi";

const modulePrefix = "auth";

const refreshToken = localStorage.getItem("refreshToken");

type AuthState = AuthData & {
  user: IUser | null;
};

const initialState: AuthState = {
  access: null,
  refresh: refreshToken ? refreshToken : null,
  user: null,
};

const authSlice = createSlice({
  name: modulePrefix,
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.access = null;
      state.refresh = null;
      state.user = null;
      localStorage.removeItem("refreshToken");
    },
    refresh: (state, { payload }: PayloadAction<AuthData>) => {
      state.access = payload.access;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.access = payload.access;
        state.refresh = payload.refresh;
        localStorage.setItem("refreshToken", payload.refresh!);
      }
    );
  },
});

export const selectUser = (state: RootState) => state.authState.user;

export const { logout, refresh, setUser } = authSlice.actions;

export default authSlice.reducer;
