import App from './App.jsx'
import http from './http.js';

export default function initApp(){
  // http, api, router, store ....

  const app = <App />;
  const uid = Math.random();
  
  http.interceptors.request.use(c => {
    console.log(http.id);
    return c;
  })

  http.get('/products/all.php');

  return { app };
}
