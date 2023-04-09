import { api } from "shared/api";

const chartApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTvl: build.query<number, void>({
      query: () => ({
        url: "total",
      }),
      transformResponse({ total }: { total: string }) {
        return parseFloat(total);
      },
    }),
  }),
});

export const { useGetTvlQuery } = chartApi;
