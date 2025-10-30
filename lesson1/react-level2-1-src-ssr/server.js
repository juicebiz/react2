import { createServer } from 'http'
import initServerApp from './dist/server/entry-server.js';
import { renderToString } from 'react-dom/server';

const app = createServer((req, resp) => {
  const { app } = initServerApp();
  const html = renderToString(app);
  resp.write(html);
  resp.end();
});

app.listen(3000);

