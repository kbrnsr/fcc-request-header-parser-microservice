const express = require('express');

const router = express.Router();

router.get('/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent'],
  });
});

router.get('/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

module.exports = router;
