import axios from "axios";
import { BASE_URL } from "../utils/constants";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const sendOTP = async (data) => api.post("/send-otp", data);
export const verifyOTP = async (data) => api.post("/verify-otp", data);
export const activate = async (data) => api.post("/activate", data);

export default api;
