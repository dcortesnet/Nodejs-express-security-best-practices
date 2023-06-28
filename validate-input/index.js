const express = require('express');
const joi = require('joi');

const app = express();
app.use(express.json());

const schema = joi.object({
  username: joi.string().alphanum().min(3).max(30).required(),
  email: joi.string().email().required(),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

app.post('/register', (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  res.status(200).json({ message: 'Success' });
});

app.listen(3000, () => {
  console.log('Server listen on port 3000');
});