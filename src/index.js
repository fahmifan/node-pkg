const express = require('express');

const config = {
  port: process.env.PORT || '3000',
}

const app = express();

app.get('/api/ping', (_, res) => res.status(200).json({ message: 'pong' }));
app.listen(config, () => {
  console.log(`server listening on http://localhost:${config.port}`);
});
