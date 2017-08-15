const express = require('express');
const router = express.Router();
const db = require("../models")
const Snack = db.snack;

router.get('/api/customer/snacks', (req, res) => {
  // res.send('blah');
  Snack.findAll()
  .then(items => {
    res.json({
      status: "success",
      data: items
    });
  })
});

module.exports = router
