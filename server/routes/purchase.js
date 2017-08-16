const express = require('express');
const router = express.Router();
const db = require("../models")
const Snack = db.snack;


router.post('/api/customer/items/:itemId/purchases', (req, res) => {
  res.send('blah');
});

module.exports = router
