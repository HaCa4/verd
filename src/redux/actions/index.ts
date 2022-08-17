import qs from "qs";
import axios, { endPoints } from "../../utils/axios";
import { Dispatch } from "redux";
import { Actions, IInitialState, ISinglePost } from "../../utils/types";

export const getPostList = () => async (dispatch: Dispatch, getState: () => IInitialState) => {
  const query = qs.stringify({
    userId: 1,
  });
  dispatch({ type: Actions.GET_POST_LIST });
  try {
    const { data } = await axios.get<ISinglePost[]>(endPoints.getPostList(query));

    dispatch({ type: Actions.SET_POST_LIST, payload: data });
  } catch (error) {
    const errorMessage = "Faced with an error while fetching the post list: " + error;
    dispatch({ type: Actions.SET_ERROR, payload: errorMessage });
  }
};

export const addNewPost = (newPost: ISinglePost) => async (dispatch: Dispatch) => {
  try {
    await axios.post(endPoints.addNewPost(), newPost);
    dispatch({ type: Actions.ADD_NEW_POST });
  } catch (error) {
    const errorMessage = "Faced with an error while adding the new post: " + error;
    dispatch({ type: Actions.SET_ERROR, payload: errorMessage });
  }
};

export const deletePost = (id: string | undefined) => async (dispatch: Dispatch) => {
  const query = qs.stringify({
    userId: "1",
  });
  try {
    await axios.delete(endPoints.deletePost(id));
    const { data } = await axios.get<ISinglePost[]>(endPoints.getPostList(query));
    dispatch({ type: Actions.SET_POST_LIST, payload: data });
  } catch (error) {
    const errorMessage = "Faced with an error while deleting the post: " + error;
    dispatch({ type: Actions.SET_ERROR, payload: errorMessage });
  }
};

export const editPost = (id: string, newPost: ISinglePost) => async (dispatch: Dispatch) => {
  try {
    await axios.patch(endPoints.editPost(id), newPost);
    dispatch({ type: Actions.EDIT_POST });
  } catch (error) {
    const errorMessage = "Faced with an error while editing the post: " + error;
    dispatch({ type: Actions.SET_ERROR, payload: errorMessage });
  }
};

export const getPostById =
  (id?: string) => async (dispatch: Dispatch, getState: () => IInitialState) => {
    try {
      const { data } = await axios.get<ISinglePost[]>(endPoints.getPostById(id));

      dispatch({ type: Actions.GET_POST_BY_ID, payload: data });
    } catch (error) {
      const errorMessage = "Faced with an error while fetching the post: " + error;
      dispatch({ type: Actions.SET_ERROR, payload: errorMessage });
    }
  };
export const setPostTitle =
  (value: string) => async (dispatch: Dispatch, getState: () => IInitialState) => {
    try {
      dispatch({ type: Actions.SET_TITLE, payload: value });
    } catch (error) {
      const errorMessage = "Faced with an error while setting post title: " + error;
      dispatch({ type: Actions.SET_ERROR, payload: errorMessage });
    }
  };
export const setPostBody =
  (value: string) => async (dispatch: Dispatch, getState: () => IInitialState) => {
    try {
      dispatch({ type: Actions.SET_BODY, payload: value });
    } catch (error) {
      const errorMessage = "Faced with an error while setting post title: " + error;
      dispatch({ type: Actions.SET_ERROR, payload: errorMessage });
    }
  };

export const getComments =
  (id?: string) => async (dispatch: Dispatch, getState: () => IInitialState) => {
    try {
      const data = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
      dispatch({ type: Actions.GET_COMMENTS, payload: data.data });
    } catch (error) {
      const errorMessage = "Faced with an error while getting comments of the post: " + error;
      dispatch({ type: Actions.SET_ERROR, payload: errorMessage });
    }
  };
