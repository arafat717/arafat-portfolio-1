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
    deleteProject: build.mutation({
      query: (proId) => ({
        url: `project/${proId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["project"],
    }),
  }),
});

export const {
  useCerateProjectMutation,
  useGetProjectQuery,
  useDeleteProjectMutation,
} = projectApi;
