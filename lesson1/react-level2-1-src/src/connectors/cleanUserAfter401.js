import { AxiosError } from "axios";

export default function cleanUserAfter401(http, authStore){
  http.interceptors.response.use(
    r => r,
    e => {
      if(e instanceof AxiosError && e.status === 401){
        authStore.setUser(null);
      }
  
      return Promise.reject(e);
    }
  )
}
