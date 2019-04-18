const express = require('express');

const routes = require('./routes');

const config = {
  port: process.env.PORT || '3000',
}

const app = express();

app.use(routes);
app.get('/api/ping', (req, res) => res.status(200).json({ message: 'pong' }));
app.listen(config, () => {
  console.log(`server listening on http://localhost:${config.port}`);
});
