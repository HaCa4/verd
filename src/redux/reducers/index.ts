import { combineReducers } from "redux";
import Reducers from "./reducers";

const reducers = combineReducers({
  reducer: Reducers,
});
export default reducers;
