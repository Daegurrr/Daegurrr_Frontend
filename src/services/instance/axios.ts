import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const createInstance = (config: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    timeout: 5000,
    ...config,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...config.headers,
    },
  });

  return instance;
};

export const fetchInstance = createInstance({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});
