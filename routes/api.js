const express = require('express');

const router = express.Router();

router.get('/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

module.exports = router;
