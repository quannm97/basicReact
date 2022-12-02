import { combineReducers } from "redux";
import homeReducer from "../store/reducer";
export default function createReducer() {
  const rootReducer = combineReducers({
    homeReducer,
  });
  return rootReducer;
}
