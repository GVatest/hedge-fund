import { api } from "shared/api";
import { SuccessResponse } from "shared/types";
import { ApplicationData } from "./types";

const applicationFormApi = api.injectEndpoints({
  endpoints: (build) => ({
    sendApplication: build.mutation<SuccessResponse, ApplicationData>({
      query: (data) => ({
        url: "application",
        method: "POST",
        body: {
          ...data
        }
      }),
    }),
  }),
});

export const { useSendApplicationMutation } = applicationFormApi;
