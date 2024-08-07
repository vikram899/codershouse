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

export const sendOTP = (data) => api.post("/send-otp", data);
export const verifyOTP = (data) => api.post("/verify-otp", data);
export const activate = (data) => api.post("/activate", data);
export const logout = () => api.post("/logout");
export const createRoom = (data) => api.post("/room", data);
export const getAllRooms = () => api.get("/rooms");

api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest.isRetry
    ) {
      originalRequest.isRetry = true;
      try {
        await axios.get(`${BASE_URL}/refresh`, {
          withCredentials: true,
        });

        return api.request(originalRequest);
      } catch (error) {
        console.error("Error while refreshing token", error);
      }
    }
    throw error;
  }
);

export default api;
