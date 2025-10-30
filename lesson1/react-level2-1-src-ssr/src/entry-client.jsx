import { createRoot } from 'react-dom/client'
import initApp from './application'
const { app } = initApp();

createRoot(document.getElementById('root')).render(app)
