import { Actions, ActionTypes, IInitialState } from "../../utils/types";

const initialState: IInitialState = {
  reducer: {
    postList: undefined,
    selectedPost: undefined,
    title: undefined,
    body: undefined,
    error: undefined,
    isLoading: false,
  },
};

const Reducers = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case Actions.ADD_NEW_POST:
      return { ...state, error: undefined, selectedPost: action.payload };
    case Actions.EDIT_POST:
      return { ...state, selectedPost: action.payload };
    case Actions.GET_POST_LIST:
      return { ...state, isLoading: true, error: undefined };
    case Actions.SET_POST_LIST:
      return { ...state, postList: action.payload, isLoading: false };
    case Actions.GET_POST_BY_ID:
      return { ...state, selectedPost: action.payload, isLoading: false };
    case Actions.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
export default Reducers;
