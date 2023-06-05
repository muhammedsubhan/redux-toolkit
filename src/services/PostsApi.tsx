import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Posts } from "../models/Posts.model";

export const PostsApi = createApi({
  reducerPath: "PostsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    posts: builder.query<Posts[], void>({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    post: builder.query<Posts, String>({
      query: (id) => `/posts/${id}`,
      providesTags: ["Posts"],
    }),
    addPost: builder.mutation<void, Posts>({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation<void, Posts>({
      query: ({ id, ...rest }) => ({
        url: `/posts/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: builder.mutation<void, String>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
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
