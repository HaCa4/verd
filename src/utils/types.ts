export interface ISinglePostProps {
  post: ISinglePost;
}

export interface ISinglePost {
  id?: string;
  title?: string;
  body?: string;
  userId?: string;
}
export interface ISingleComment {
  id?: string;
  name?: string;
  body?: string;
  postId?: string;
  email?: string;
}

export interface IInitialState {
  reducer: {
    postList: ISinglePost[] | undefined;
    commentList: ISingleComment[] | undefined;
    selectedPost: ISinglePost | undefined;
    body: string | undefined;
    title: string | undefined;
    error: string | undefined;
    isLoading: boolean;
  };
}

export enum Actions {
  ADD_NEW_POST = "ADD_NEW_POST",
  EDIT_POST = "EDIT_POST",
  DELETE_POST = "DELETE_POST",
  GET_POST_LIST = "GET_POST_LIST",
  SET_POST_LIST = "SET_POST_LIST",
  GET_COMMENTS = "GET_COMMENTS",
  SELECT_POST = "SELECT_POST",
  SET_ERROR = "SET_ERROR",
  SET_BODY = "SET_BODY",
  SET_TITLE = "SET_TITLE",
  GET_POST_BY_ID = "GET_POST_BY_ID",
}

interface AddNewPost {
  type: Actions.ADD_NEW_POST;
  payload: ISinglePost;
}
interface DeletePost {
  type: Actions.DELETE_POST;
}
interface EditPost {
  type: Actions.EDIT_POST;
  payload: ISinglePost;
}
type GetPostList = {
  type: Actions.GET_POST_LIST;
};
interface SetPostList {
  type: Actions.SET_POST_LIST;
  payload: ISinglePost[];
}
interface GetComments {
  type: Actions.GET_COMMENTS;
  payload: ISingleComment[];
}
interface GetPostById {
  type: Actions.GET_POST_BY_ID;
  payload: ISinglePost;
}
interface SetError {
  type: Actions.SET_ERROR;
  payload: string;
}
interface SetPostTitle {
  type: Actions.SET_TITLE;
  payload: string;
}
interface SetPostBody {
  type: Actions.SET_BODY;
  payload: string;
}
export type ActionTypes =
  | AddNewPost
  | EditPost
  | DeletePost
  | GetPostList
  | SetPostList
  | GetComments
  | GetPostById
  | SetError
  | SetPostBody
  | SetPostTitle;
