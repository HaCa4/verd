import { NavigateFunction } from "react-router-dom";
import { AnyAction, Dispatch } from "redux";
import { ISinglePost } from "./types";

export const deletePostHandler = (
  deletePost: (id: string | undefined) => (dispatch: Dispatch<AnyAction>) => Promise<void>,
  navigate: NavigateFunction,
  post: ISinglePost | undefined
) => {
  deletePost(post?.id);
  navigate("/");
};

export const addPostHandler = (
  addNewPost: (newPost: ISinglePost) => (dispatch: Dispatch<AnyAction>) => Promise<void>,
  body: string | undefined,
  title: string | undefined,
  navigate: NavigateFunction
) => {
  addNewPost({
    id: `${Math.floor(Math.random() * 10000)}`,
    userId: "1",
    body: body,
    title: title,
  });
  navigate("/");
};

export const editPostHandler = (
  editPost: (id: string, newPost: ISinglePost) => (dispatch: Dispatch<AnyAction>) => Promise<void>,
  post: ISinglePost | undefined,
  body: string | undefined,
  title: string | undefined
) => {
  editPost(`${post?.id}`, {
    body: body,
    title: title,
  });
};
