import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    cerateBlog: build.mutation({
      query: (newblog) => ({
        url: "blog/create-blog",
        method: "POST",
        body: newblog,
      }),
      invalidatesTags: ["blog"],
    }),
    getBlog: build.query({
      query: () => "blog",
      providesTags: ["blog"],
    }),
    getBlogById: build.query({
      query: (blogId) => `blog/${blogId}`,
      providesTags: ["blog"],
    }),
    deleteBlog: build.mutation({
      query: (blogId) => ({
        url: `blog/${blogId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useCerateBlogMutation,
  useGetBlogQuery,
  useGetBlogByIdQuery,
  useDeleteBlogMutation,
} = blogApi;
