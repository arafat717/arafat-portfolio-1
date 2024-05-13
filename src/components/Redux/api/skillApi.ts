import { baseApi } from "./baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    cerateSkill: build.mutation({
      query: (newSkill) => ({
        url: "skill/create-skill",
        method: "POST",
        body: newSkill,
      }),
      invalidatesTags: ["skill"],
    }),
    getSkill: build.query({
      query: () => "skill",
      providesTags: ["skill"],
    }),
  }),
});

export const { useCerateSkillMutation, useGetSkillQuery } = skillApi;
