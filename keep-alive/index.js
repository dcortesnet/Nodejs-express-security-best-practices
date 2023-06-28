const express = require('express');
const app = express();

const server = app.listen(3000, () => {
  console.log('server on port 3000');
});

server.keepAliveTimeout = 30 * 1000; // 30 seconds
server.headersTimeout = 35 * 1000; // 35 seconds