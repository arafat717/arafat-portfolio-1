import { baseApi } from "./baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    cerateProject: build.mutation({
      query: (newblog) => ({
        url: "project/create-project",
        method: "POST",
        body: newblog,
      }),
      invalidatesTags: ["project"],
    }),
    getProject: build.query({
      query: () => "project",
      providesTags: ["project"],
    }),
  }),
});

export const { useCerateProjectMutation, useGetProjectQuery } = projectApi;
