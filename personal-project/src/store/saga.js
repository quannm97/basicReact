import {
  createHomeDataService,
  deleteHomeDataService,
  detailHomeDataService,
  getHomeDataService,
  editHomeDataService,
  getPublishDataService,
  createPublishDataService,
  deletePublishDataService,
  detailPublishDataService,
  editPublishDataService,
  getBookDataService,
  createBookDataService,
  deleteBookDataService,
  detailBookDataService,
  editBookDataService,
  authenticateService,
} from "../api/api";
import { takeLatest, put, call } from "redux-saga/effects";
import {
  saveBookDataAction,
  saveDetailDataAction,
  saveHomeDataAction,
  savePublishDataAction,
} from "./action";
import {
  CREATE_BOOK_DATA,
  CREATE_HOME_DATA,
  CREATE_PUBLISH_DATA,
  DELETE_BOOK_DATA,
  DELETE_HOME_DATA,
  DELETE_PUBLISH_DATA,
  DETAIL_BOOK_DATA,
  DETAIL_HOME_DATA,
  DETAIL_PUBLISH_DATA,
  EDIT_BOOK_DATA,
  EDIT_HOME_DATA,
  EDIT_PUBLISH_DATA,
  GET_BOOK_DATA,
  GET_HOME_DATA,
  GET_PUBLISH_DATA,
  LOGIN_REQUEST,
} from "./constants";
//Login sagas
function* loginSaga({ payload, resolve }) {
  try {
    const response = yield call(authenticateService, payload);

    resolve(response);
  } catch (error) {
    resolve("fail");
  }
}
export function* sagaLogin() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}

//Home sagas
function* fetchHomeDataSaga() {
  try {
    const response = yield call(getHomeDataService);
    yield put(saveHomeDataAction(response.data));
  } catch (error) {}
}

function* createHomeDataSaga({ payload, resolve }) {
  try {
    const response = yield call(createHomeDataService, payload);
    resolve(response.status);
  } catch (error) {
    resolve(null);
  }
}

function* deleteHomeDataSaga({ payload, resolve }) {
  try {
    const response = yield call(deleteHomeDataService, payload);
    resolve(response.status);
  } catch (error) {
    resolve(null);
  }
}

function* detailHomeDataSaga({ payload, resolve }) {
  try {
    const response = yield call(detailHomeDataService, payload);
    resolve(response.data);
    yield put(saveDetailDataAction(response.data));
  } catch (error) {
    resolve(null);
  }
}

function* editHomeDataSaga({ payload, resolve }) {
  try {
    const response = yield call(editHomeDataService, payload);
    resolve(response.status);
  } catch (error) {
    resolve(null);
  }
}

export function* sagaHomeData() {
  yield takeLatest(GET_HOME_DATA, fetchHomeDataSaga);
  yield takeLatest(CREATE_HOME_DATA, createHomeDataSaga);
  yield takeLatest(DELETE_HOME_DATA, deleteHomeDataSaga);
  yield takeLatest(DETAIL_HOME_DATA, detailHomeDataSaga);
  yield takeLatest(EDIT_HOME_DATA, editHomeDataSaga);
}

//Publish sagas
function* fetchPublishDataSaga() {
  try {
    const response = yield call(getPublishDataService);
    yield put(savePublishDataAction(response.data));
  } catch (error) {}
}

function* createPublishDataSaga({ payload, resolve }) {
  try {
    const response = yield call(createPublishDataService, payload);
    resolve(response.status);
  } catch (error) {
    resolve(null);
  }
}

function* deletePublishDataSaga({ payload, resolve }) {
  try {
    const response = yield call(deletePublishDataService, payload);
    resolve(response.status);
  } catch (error) {
    resolve(null);
  }
}

function* detailPublishDataSaga({ payload, resolve }) {
  try {
    const response = yield call(detailPublishDataService, payload);
    resolve(response.data);
    yield put(saveDetailDataAction(response.data));
  } catch (error) {
    resolve(null);
  }
}

function* editPublishDataSaga({ payload, resolve }) {
  try {
    const response = yield call(editPublishDataService, payload);
    resolve(response.status);
  } catch (error) {
    resolve(null);
  }
}

export function* sagaPublishData() {
  yield takeLatest(GET_PUBLISH_DATA, fetchPublishDataSaga);
  yield takeLatest(CREATE_PUBLISH_DATA, createPublishDataSaga);
  yield takeLatest(DELETE_PUBLISH_DATA, deletePublishDataSaga);
  yield takeLatest(DETAIL_PUBLISH_DATA, detailPublishDataSaga);
  yield takeLatest(EDIT_PUBLISH_DATA, editPublishDataSaga);
}

//Book sagas
function* fetchBookDataSaga() {
  try {
    const response = yield call(getBookDataService);
    yield put(saveBookDataAction(response.data));
  } catch (error) {}
}

function* createBookDataSaga({ payload, resolve }) {
  try {
    const response = yield call(createBookDataService, payload);
    resolve(response.status);
  } catch (error) {
    resolve(null);
  }
}

function* deleteBookDataSaga({ payload, resolve }) {
  try {
    const response = yield call(deleteBookDataService, payload);
    resolve(response.status);
  } catch (error) {
    resolve(null);
  }
}

function* detailBookDataSaga({ payload, resolve }) {
  try {
    const response = yield call(detailBookDataService, payload);
    resolve(response.data);

    yield put(saveDetailDataAction(response.data));
  } catch (error) {
    resolve(null);
  }
}

function* editBookDataSaga({ payload, resolve }) {
  try {
    const response = yield call(editBookDataService, payload);
    resolve(response.status);
  } catch (error) {
    resolve(null);
  }
}

export function* sagaBookData() {
  yield takeLatest(GET_BOOK_DATA, fetchBookDataSaga);
  yield takeLatest(CREATE_BOOK_DATA, createBookDataSaga);
  yield takeLatest(DELETE_BOOK_DATA, deleteBookDataSaga);
  yield takeLatest(DETAIL_BOOK_DATA, detailBookDataSaga);
  yield takeLatest(EDIT_BOOK_DATA, editBookDataSaga);
}
