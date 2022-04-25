import axios from "axios";
import auth from "./auth";

// https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81

// for authenticated calls
const subletsBackendInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SUBLETSBACKEND}/listings`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${auth.getUser()}`,
  },
});

export default subletsBackendInstance;
