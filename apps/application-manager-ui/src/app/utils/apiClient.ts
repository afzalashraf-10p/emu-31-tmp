import axios from "axios";
import { API_URL } from "./constants";

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: false,
});

export default apiClient;
