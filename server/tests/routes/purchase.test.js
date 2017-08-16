const app = require("../../index");
const db = require("../../models/index");
const request = require("supertest");
const Snack = db.snack;
const Customer = db.customer;

describe("Purchase router", () => {
  describe("POST /api/customer/items/:itemId/purchases", () => {
    it("has successful status code", () => {
      return Snack.create({
        description: "Reese's",
        price: 75,
        quantity: 10
      }).then(snack => {
        return request(app)
          .post("/api/customer/items/126/purchases")
<<<<<<< HEAD
          .expect(201)
=======
          // .expect(200)
>>>>>>> 65a985ecec4ed0bb4db6241515e644a4bb185c53
      });
    });



    it('responds with status:success when customer can purchase item', () => {
      return Snack.create({ description: "yay", quantity: 5, cost: 20 })
      .then(snack => {
        Customer.create({ money: 50 })
        .then(customer => {
          request(app)
          .post(`api/customer/items/${itemId}/purchases`)
          .then(res = {
            expect(res.body.status).toBe('success');
          })
        })
      })
    })
    })

    it('responds with status:fail when customer has too little money', () => {
      return Snack.create({ description: "yay", quantity: 5, cost: 20 })
      .then(snack => {
        Customer.create({ money: 5 })
        .then(customer => {
          request(app)
          .post(`api/customer/items/${itemId}/purchases`)
          .then(res = {
            expect(res.body.status).toBe('fail');
          })
        })
      })
    })

    it('responds with status:fail when item quantity is zero', () => {

    })

    it('reduces the customer money by the item cost', () => {
      return Snack.create({description: "yes", quantity: 2, cost: 20})
      .then(snack=> {
        Customer.create({cashOnHand: 50})
        .then(customer => {
          request(app)
          .post(`api/customer/items/${itemId}/purchases`)
          .then(res => {
            Customer.findById(customer.id).then(updatedCustomer => {
              expect(updatedCustomer.cashOnHand).toBe(customer.cashOnHand - snack.price)
            })
          })
        })
      }
    })
  });
});
