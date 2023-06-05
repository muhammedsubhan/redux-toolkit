import { configureStore } from "@reduxjs/toolkit";
import { PostsApi } from "../services/PostsApi";

export const store = configureStore({
  reducer: {
    [PostsApi.reducerPath]: PostsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PostsApi.middleware),
});
