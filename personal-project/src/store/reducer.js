import { INIT_STATE } from "./state";

import {
  SAVE_BOOK_DATA,
  SAVE_DETAIL_DATA,
  SAVE_HOME_DATA,
  SAVE_PUBLISH_DATA,
} from "./constants";

import produce from "immer";

export default function homeReducer(state = INIT_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SAVE_HOME_DATA:
        draft.home.data = action.payload;
        break;
      case SAVE_PUBLISH_DATA:
        draft.publish.data = action.payload;
        break;
      case SAVE_BOOK_DATA:
        draft.book.data = action.payload;
        break;
      case SAVE_DETAIL_DATA:
        draft.detailData.data = action.payload;
        break;
      default:
        return state;
    }
  });
}
