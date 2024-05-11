import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    cerateBlog: build.mutation({
      query: (newblog) => ({
        url: "/blog/create-blog",
        method: "POST",
        body: newblog,
      }),
      invalidatesTags: ["blog"],
    }),
    getBlog: build.query({
      query: () => "/blog",
      providesTags: ["blog"],
    }),
  }),
});

export const { useCerateBlogMutation, useGetBlogQuery } = blogApi;
