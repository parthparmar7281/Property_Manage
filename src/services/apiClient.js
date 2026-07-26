import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "https://localhost:7031/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor: Attach authentication token if available
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Global error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error Response:", error.response || error.message);
    return Promise.reject(error);
  }
);

// Generic HTTP wrappers
export const get = (url, config = {}) => apiClient.get(url, config);
export const post = (url, data = {}, config = {}) => apiClient.post(url, data, config);
export const put = (url, data = {}, config = {}) => apiClient.put(url, data, config);
export const del = (url, config = {}) => apiClient.delete(url, config);

export default apiClient;
