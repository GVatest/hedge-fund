export {
  default as authApi,
  useGetUserQuery,
  useLoginMutation,
  useLogoutMutation,
} from "./authApi";
export { default as authReducer, selectUser } from "./authSlice";
export { default as privateApi } from "./privateApi";
