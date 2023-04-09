import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./baseQueryWithReauth";

export default createApi({
  reducerPath: "privateApi",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
