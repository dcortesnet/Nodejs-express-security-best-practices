const express = require('express');
const app = express();

app.use((req, res, next) => {
  req.setTimeout(5000); // Set request timeout to 5 seconds
  res.setTimeout(5000); // Set response timeout to 5 seconds
  next();
});