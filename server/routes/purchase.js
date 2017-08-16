const express = require('express');
const router = express.Router();
const db = require("../models")
const Snack = db.snack;
const Customer = db.customer;

function currentCustomer(callback) {
  Customer.findOne().then(callback);
}

router.post('/api/customer/items/:itemId/purchases', (req, res) => {
  // Snack.findAll()
  // .then(result => {
  //   console.log(result);
    // res.send(200)
  // })
  currentCustomer(customer => {
    Snack.findById(parseInt(req.params.itemId))
    .then(snack => {
      if ((Customer.cashOnHand > snack.price) && (snack.quantity >= 1)) {
        snack.quantity -= 1;
        Customer.cashOnHand -= snack.price;
        snack.save()
        .then(snack => {
          res.json({
            status: "success",
          })
          // res.send(`Thank you. Enjoy your ${snack}. Your change is ${parseInt(Customer.cashOnHand) - parseInt(snack.price)}`);
        })
      }
      else {
        res.json({
          status: "failure",
          data: {
            "money_given": `${Customer.cashOnHand}`,
            "money_required": `${snack.price}`
          }
        })
      }
    })
  })
});

module.exports = router
