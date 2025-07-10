// routes/routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index'); // matches index.ejs
});

module.exports = router;
