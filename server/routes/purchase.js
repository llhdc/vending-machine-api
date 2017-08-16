const express = require('express');
const router = express.Router();
const db = require("../models")
const Snack = db.snack;
const Customer = db.customer;


router.post('/api/customer/items/:itemId/purchases', (req, res) => {
  // Snack.findById(parseInt(req.params.itemId))
  // .then(snack => {
  //   console.log(snack);
  //   if ((Customer.cashOnHand > snack.price) && (snack.quantity >= 1)) {
  //     snack.quantity -= 1;
  //     snack.save()
  //     .then(snack => {
  //       res.json({
  //         status: "success",
  //         data: snack
  //       })
  //       // res.send(`Thank you. Enjoy your ${snack}. Your change is ${parseInt(Customer.cashOnHand) - parseInt(snack.price)}`);
  //     })
  //   }
  //   else {
  //     res.json({
  //       status: "failure",
  //       data: {
  //         "money_given": `${Customer.cashOnHand}`,
  //         "money_required": `${snack.price}`
  //       }
  //     })
  //   }
  // })

  res.send('blah')
});

module.exports = router
