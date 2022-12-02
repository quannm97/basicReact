import { INIT_STATE } from "./state";
import { createSelector } from "reselect";
const selectData = (state) => {
  return state.homeReducer || INIT_STATE;
};

const selectHomeData = createSelector(
  selectData,
  (state) => state.home?.data || []
);

const selectPublishData = createSelector(
  selectData,
  (state) => state.publish?.data || []
);

const selectBookData = createSelector(
  selectData,
  (state) => state.book?.data || []
);

const selectDetailData = createSelector(
  selectData,
  (state) => state.detailData.data || []
);

export { selectHomeData, selectPublishData, selectBookData, selectDetailData };
