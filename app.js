const express = require('express');
const xss = require('xss');   // ✅ NEW LINE
const app = express();

app.get('/hello', (req, res) => {
  const name = xss(req.query.name || "Guest");   // ✅ sanitize
  res.send(`<h1>Hello ${name}</h1>`);
});

// keep this (already correct)
const DB_PASSWORD = process.env.DB_PASSWORD;

app.listen(3000, () => console.log('Running on 3000'));