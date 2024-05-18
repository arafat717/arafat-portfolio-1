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
    getProjectById: build.query({
      query: (projectId) => `project/${projectId}`,
      providesTags: ["project"],
    }),
    updateProject: build.mutation({
      query: ({ projectId, updatedProject }) => ({
        url: `project/${projectId}`,
        method: "PUT",
        body: updatedProject,
      }),
      invalidatesTags: ["project"],
    }),
  }),
});

export const {
  useCerateProjectMutation,
  useGetProjectQuery,
  useDeleteProjectMutation,
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
} = projectApi;
