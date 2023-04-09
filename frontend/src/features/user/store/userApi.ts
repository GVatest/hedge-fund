import { privateApi } from "features/auth";
import { SuccessResponse } from "shared/types";

const userApi = privateApi.injectEndpoints({
  endpoints: (build) => ({
    withdraw: build.mutation<SuccessResponse, void>({
      query() {
        return {
          url: "withdraw",
          method: "POST",
        };
      },
    }),
  }),
});

export const { useWithdrawMutation } = userApi;

export default userApi;
