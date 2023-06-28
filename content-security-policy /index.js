const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'");
  next();
});

app.listen(3000, () => {
  console.log(`Server listen on port 3000`);
});