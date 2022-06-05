import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_NASA_API_BASE_URL,
  timeout: 10000,
  params: {
    api_key: process.env.REACT_APP_NASA_API_KEY,
  },
});

export default API;
