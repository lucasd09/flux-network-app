import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { env } from "./env";

const apiClient = axios.create({
  baseURL: env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        localStorage.removeItem("auth_token");
        window.location.href = "/login";
      }

      if (status === 403) {
        console.error("Permission denied");
      }

      if (status === 404) {
        console.error("Resource not found");
      }

      if (status === 500) {
        console.error("Server error occurred");
      }
    } else if (error.request) {
      console.error("Network error - no response received");
    } else {
      console.error("Error setting up request:", error.message);
    }

    return Promise.reject(error);
  },
);

export const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient(config);
  return response.data;
};

export const get = <TSchema>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<TSchema> => {
  return request<TSchema>({
    url,
    method: "GET",
    ...config,
  });
};

export const post = <TSchema, TData = TSchema>(
  url: string,
  data: TSchema,
  config?: AxiosRequestConfig,
): Promise<TData> => {
  return request<TData>({
    url,
    method: "POST",
    data,
    ...config,
  });
};

export const put = <TSchema, TData = TSchema>(
  url: string,
  data?: TSchema,
  config?: AxiosRequestConfig,
): Promise<TData> => {
  return request<TData>({
    url,
    method: "PUT",
    data,
    ...config,
  });
};

export const patch = <TSchema, TData = TSchema>(
  url: string,
  data?: Partial<TSchema>,
  config?: AxiosRequestConfig,
): Promise<TData> => {
  return request<TData>({
    url,
    method: "PATCH",
    data,
    ...config,
  });
};

export const del = (
  url: string,
  config?: AxiosRequestConfig,
): Promise<void> => {
  return request<void>({
    url,
    method: "DELETE",
    ...config,
  });
};
