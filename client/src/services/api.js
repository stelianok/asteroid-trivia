import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_NASA_API_BASE_URL,
  timeout: 10000,
  params: {
    api_key: import.meta.env.VITE_NASA_API_KEY,
  },
});

export default API;
