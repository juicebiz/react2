import App from './App.jsx'
import RootStore from './stores/index.js'
import StoreContext from './contexts/StoreContext.js'
import initHttp from './shared/http.js'
import initApi from './api/index.js';
import cleanUserAfter401 from './connectors/cleanUserAfter401.js';
import ApiContext from './contexts/ApiContext.js';

export default function initApp(){
  const http = initHttp('https://faceprog.ru/courseapi');
  const api = initApi(http);
  const store = new RootStore(api);
  
  cleanUserAfter401(http, store.auth);

  store.cart.load();

  const app = <StoreContext.Provider value={store}>
    <ApiContext value={api}>
      <App />
    </ApiContext>
  </StoreContext.Provider>;

api.products.add({});
api.products.add({ title: '32' });
console.log(api.products.add({ title: '432432', price: 1, rest: 2 }));

  return { app, store }
}



