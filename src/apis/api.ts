import axios from "axios";

// https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81

export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_SUBLETSBACKEND,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// for auth calls
export const subletsBackendInstance = axios.create({
  baseURL: process.env.SUBLETSBACKEND,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    //'Authorization': `Bearer ${}`
  },
});

export default subletsBackendInstance;
