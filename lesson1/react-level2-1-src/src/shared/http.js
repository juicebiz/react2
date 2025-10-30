import axios, { AxiosError } from 'axios'

export default function initHttp(baseURL){
  const http = axios.create({
    baseURL,
    timeout: 10000
  });

  return http;
}