import App from './App.jsx'
import RootStore from './stores/index.js'
import StoreContext from './contexts/StoreContext.js'
import initHttp from './shared/http.js'
import initApi from './api/index.js';
import cleanUserAfter401 from './connectors/cleanUserAfter401.js';

export default function initApp(){
  const http = initHttp('https://faceprog.ru/courseapi');
  const api = initApi(http);
  const store = new RootStore(api);
  
  cleanUserAfter401(http, store.auth);

  store.cart.load();

  const app = <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>;

  return { app, store }
}



