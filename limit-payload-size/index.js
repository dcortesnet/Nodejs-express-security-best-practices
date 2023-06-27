const express = require('express');
const app = express();
app.use(express.json());

const limitPayloadSize = (req, res, next) => {
  const MAX_PAYLOAD_SIZE = 1024 * 1024; // 1MB
  if (req.headers['content-length'] && parseInt(req.headers['content-length']) > MAX_PAYLOAD_SIZE) {
    return res.status(413).json({ error: 'Payload size exceeds the limit' });
  }
  next();
}

app.use(limitPayloadSize);

app.listen(3000, () => {
  console.log('listen on port 3000')
});