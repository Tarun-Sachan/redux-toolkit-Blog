import { configureStore } from "@reduxjs/toolkit";
import postsReduces from "../features/post/postsSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsReduces,
    users: usersReducer,
  },
});
