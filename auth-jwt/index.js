const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const secretKey = 'secret key';

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const token = jwt.sign({ username, password }, secretKey, { expiresIn: '1h' });
  res.json({ token });
});


app.get('/protected', verifyToken, (req, res) => {
  res.send('Protected route!');
});


function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not provider' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid Token' });
    }
    req.user = decoded;
    next();
  });
}

app.listen(3000, () => {
  console.log(`Server on port 3000`);
});
