const express = require('express');
const app = express();

// ✅ FIX: sanitize user input (prevent XSS)
const escapeHtml = (unsafe) => {
  return (unsafe || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
};

app.get('/hello', (req, res) => {
  const name = escapeHtml(req.query.name || "Guest");
  res.send('<h1>Hello ' + name + '</h1>');
});

// ✅ FIX: use environment variable (no hardcoded secret)
const DB_PASSWORD = process.env.DB_PASSWORD;

app.listen(3000, () => console.log('Running on 3000'));