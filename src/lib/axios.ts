import { useLocalStorage } from "@/hooks/useLocalStorage";
import axios, { AxiosError } from "axios";
import { getAuthToken } from "../contexts/tokenStore";

const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  (typeof window === "undefined" ? "http://localhost:3000" : "");

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15_000,
  withCredentials: true,
});

api.interceptors.request.use(
  (config: any) => {
    const token = getAuthToken();

    if (token !== "") {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: Error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response: any) => response,
  (error: AxiosError) => {
    // Optionally map error shape
    // Example: if (error.response?.status === 401) trigger logout
    return Promise.reject(error);
  }
);
