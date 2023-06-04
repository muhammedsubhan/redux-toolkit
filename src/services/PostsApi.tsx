import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Posts } from "../models/Posts.model";

export const PostsApi = createApi({
  reducerPath: "PostsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    posts: builder.query<Posts[], void>({
      query: () => "posts",
    }),
  }),
});

export const { usePostsQuery } = PostsApi;
