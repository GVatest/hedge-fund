import { api } from "shared/api";
import { Flow } from "./types";

const chartApi = api.injectEndpoints({
  endpoints: (build) => ({
    getFlows: build.query<Flow[], void>({
      query: () => ({
        url: "traffic",
      }),
    }),
  }),
});

export const { useGetFlowsQuery } = chartApi;
