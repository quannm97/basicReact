import axios from "axios";

const URL = "https://62fd03a16e617f88dea33433.mockapi.io/";
const LOGIN_URL = "https://quanlycudan.azurewebsites.net/api/Users";

//LOGIN API
const authenticateService = (user) =>
  axios.post(`${LOGIN_URL}/authenticate`, user);

//HOME API
const getHomeDataService = () => axios.get(`${URL}/Home_Data`);

const createHomeDataService = (data) => axios.post(`${URL}/Home_Data`, data);

const deleteHomeDataService = (id) => axios.delete(`${URL}/Home_Data/${id}`);

const detailHomeDataService = (id) => axios.get(`${URL}/Home_Data/${id}`);

const editHomeDataService = (payload) =>
  axios.put(`${URL}/Home_Data/${payload.id}`, payload);

//PUBLISH API
const getPublishDataService = () => axios.get(`${URL}/Publish_Data`);

const createPublishDataService = (data) =>
  axios.post(`${URL}/Publish_Data`, data);

const deletePublishDataService = (id) =>
  axios.delete(`${URL}/Publish_Data/${id}`);

const detailPublishDataService = (id) => axios.get(`${URL}/Publish_Data/${id}`);

const editPublishDataService = (payload) =>
  axios.put(`${URL}/Publish_Data/${payload.id}`, payload);

//BOOK API
const getBookDataService = () => axios.get(`${URL}/Book_Data`);

const createBookDataService = (data) => axios.post(`${URL}/Book_Data`, data);

const deleteBookDataService = (id) => axios.delete(`${URL}/Book_Data/${id}`);

const detailBookDataService = (id) => axios.get(`${URL}/Book_Data/${id}`);

const editBookDataService = (payload) =>
  axios.put(`${URL}/Book_Data/${payload.id}`, payload);

export {
  authenticateService,
  getHomeDataService,
  createHomeDataService,
  deleteHomeDataService,
  detailHomeDataService,
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
};
