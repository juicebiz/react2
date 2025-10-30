import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import initApp from './application';
import { BrowserRouter } from 'react-router';

(async function(){
  const { app } = initApp();

  createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      { app }
    </BrowserRouter>
  );
})();