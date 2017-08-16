const express = require('express');
const router = express.Router();
const db = require("../models")
const Snack = db.snack;
const Customer = db.customer;


router.post('/api/customer/items/:itemId/purchases', (req, res) => {
  Snack.findById(parseInt(req.params.id))
  .then(snack => {
    if ((Customer.cashOnHand > snack.price) && (snack.quantity >= 1)) {
      snack.quantity -= 1;
      snack.save()
      .then(snack => {
        res.send(`Thank you. Enjoy your ${snack}. Your change is ${parseInt(Customer.cashOnHand) - parseInt(snack.price)}`);
      })
    } 
    else {
      res.json("Sorry, you can't have that snack")
    }
  })
});

module.exports = router
