import axios from "axios";
const API = process.env.REACT_APP_API_URL;

const AxiosInstance = axios.create({
  baseURL:
    // process.env.NODE_ENV === "development" ?
    `${API}`,
  // : "DEPLOY URL"
  timeout: 50000,
});

export default AxiosInstance;
