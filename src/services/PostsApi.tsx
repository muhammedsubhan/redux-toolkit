import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Posts } from "../models/Posts.model";

export const PostsApi = createApi({
  reducerPath: "PostsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    posts: builder.query<Posts[], void>({
      query: () => "/posts",
    }),
    post: builder.query<Posts, String>({
      query: (id) => `/posts/${id}`,
    }),
    addPost: builder.mutation<void, Posts>({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
    }),
    updatePost: builder.mutation<void, Posts>({
      query: ({ id, ...rest }) => ({
        url: `/posts/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    deletePost: builder.mutation<void, String>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  usePostsQuery,
  usePostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = PostsApi;
