import {
  LOGIN_REQUEST,
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
  SAVE_BOOK_DATA,
  SAVE_DETAIL_DATA,
  SAVE_HOME_DATA,
  SAVE_PUBLISH_DATA,
} from "./constants";
//Login action
export const loginAction = (dispatch) => (payload) =>
  new Promise((resolve) => dispatch({ type: LOGIN_REQUEST, payload, resolve }));

//Home actions
export function getHomeDataAction(payload) {
  return { type: GET_HOME_DATA, payload };
}

export function saveHomeDataAction(payload) {
  return { type: SAVE_HOME_DATA, payload };
}

export const asyncCreateHomeDataAction = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: CREATE_HOME_DATA, payload, resolve })
  );

export const asyncDeleteHomeDataAction = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: DELETE_HOME_DATA, payload, resolve })
  );

export const asyncDetailHomeDataAction = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: DETAIL_HOME_DATA, payload, resolve })
  );

export const asyncEditHomeDataAction = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: EDIT_HOME_DATA, payload, resolve })
  );

//Publish actions
export function getPublishDataAction(payload) {
  return { type: GET_PUBLISH_DATA, payload };
}

export function savePublishDataAction(payload) {
  return { type: SAVE_PUBLISH_DATA, payload };
}

export const asyncCreatePublishDataAction = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: CREATE_PUBLISH_DATA, payload, resolve })
  );

export const asyncDeletePublishDataAction = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: DELETE_PUBLISH_DATA, payload, resolve })
  );

export const asyncDetailPublishDataAction = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: DETAIL_PUBLISH_DATA, payload, resolve })
  );

export const asyncEditPublishDataAction = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: EDIT_PUBLISH_DATA, payload, resolve })
  );

//Book actions
export function getBookDataAction(payload) {
  return { type: GET_BOOK_DATA, payload };
}

export function saveBookDataAction(payload) {
  return { type: SAVE_BOOK_DATA, payload };
}

export const asyncCreateBookDataAction = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: CREATE_BOOK_DATA, payload, resolve })
  );

export const asyncDeleteBookDataAction = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: DELETE_BOOK_DATA, payload, resolve })
  );

export const asyncDetailBookDataAction = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: DETAIL_BOOK_DATA, payload, resolve })
  );

export const asyncEditBookDataAction = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: EDIT_BOOK_DATA, payload, resolve })
  );

export function saveDetailDataAction(payload) {
  return { type: SAVE_DETAIL_DATA, payload };
}
