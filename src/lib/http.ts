import { api } from "./axios";

export async function get<T>(
  url: string,
  params?: Record<string, any>,
  config?: Record<string, any>
) {
  const res = await api.get<T>(url, { ...config, params });
  return res.data;
}

export async function post<T, B = unknown>(
  url: string,
  body?: B,
  config?: Record<string, any>
) {
  const res = await api.post<T>(url, body, config);
  return res.data;
}

export async function patch<T, B = unknown>(
  url: string,
  body?: B,
  config?: Record<string, any>
) {
  const res = await api.patch<T>(url, body, config);
  return res.data;
}

export async function del<T>(url: string, config?: Record<string, any>) {
  const res = await api.delete<T>(url, config);
  return res.data;
}
