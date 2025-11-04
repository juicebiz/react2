import { Link, useRoutes } from "react-router"
import routes from "@/router"
import { useState } from "react";
import SettingsContext from "@/contexts/SettingsContext";
import Alert from "@/components/UI/Alert";
import Cart from "@/components/Cart";
import Alerts from "./components/Alerts";
import E404 from "./components/Errors/E404";

export default function App() {
  const page = useRoutes(routes);
  const [ settings, setSettings ] = useState({ theme: 'light' })

  return <SettingsContext.Provider value={settings}>
    <div>
      <header>
        <div className="container py-2 position-relative">
          Header
          <Cart />
          <hr />
          <Alerts />
        </div>
      </header>
      <div>
        <div className="container py-2">
          <div className="row">
            <div className="col col-12 col-md-3">
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products">Catalog</Link>
                </li>
              </ul>
            </div>
            <main className="col col-12 col-md-9">
              { page ?? <E404 /> }
            </main>
          </div>
        </div>
      </div>
      <footer>
        <div className="container py-2">
          <hr />
          Footer
          <Alert variant="default">
            <p>Current theme: { settings.theme }</p>
            <p>
              <button onClick={() => setSettings(prev => ({ ...prev, theme: 'light' }))}>L</button>
              <button onClick={() => setSettings(prev => ({ ...prev, theme: 'dark' }))}>D</button>
            </p>
          </Alert>
        </div>
      </footer>
    </div>
  </SettingsContext.Provider>
}