const next = require('next');
const express = require('express');
const server = express();

const app = next({ dev: process.env.NODE_ENV !== 'production' });

server.get('/ping', (req, res) => {
    res.send('pong');
});

const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    server.all('*', async (req, res) => {
      try {
        await handle(req, res);
      } catch (err) {
        console.error('Error handling request:', err);
        res.status(500).send('Internal Server Error');
      }
    });

    server.listen(8080, () => {
      console.log('Server is running on port 8080');
    });
  })
  .catch(err => {
    console.error('Error during app preparation:', err);
    process.exit(1); // Optionally shut down the server if app.prepare() fails
  });
