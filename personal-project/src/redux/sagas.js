import { all } from "redux-saga/effects";
import {
  sagaHomeData,
  sagaPublishData,
  sagaBookData,
  sagaLogin,
} from "../store/saga";
// import * as studentsSagas from "../Pages/MyClass/stores/";
// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield all([sagaLogin(), sagaHomeData(), sagaPublishData(), sagaBookData()]);
}
