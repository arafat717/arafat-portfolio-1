import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://l2-b2-ph-university-server-azure.vercel.app/api/v1",
  }),
  tagTypes: ["blog"],
  endpoints: () => ({}),
});
