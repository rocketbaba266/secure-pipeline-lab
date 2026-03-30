const express = require('express');
const app = express();

// VULNERABLE: XSS
app.get('/hello', (req, res) => {
  res.send('<h1>Hello ' + req.query.name + '</h1>');
});

// VULNERABLE: hardcoded secret
const DB_PASSWORD = process.env.DB_PASSWORD;

app.listen(3000, () => console.log('Running on 3000'));