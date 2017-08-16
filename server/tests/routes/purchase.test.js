const app = require("../../index");
const db = require("../../models/index");
const request = require("supertest");
const Snack = db.snack;

describe("Purchase router", () => {
  describe("POST /api/customer/items/:itemId/purchases", () => {
    it("has successful status code", () => {
      return Snack.create({
        description: "Reese's",
        price: 75,
        quantity: 10
      }).then(snack => {
        return request(app)
          .post("/api/customer/items/1/purchases")
          .then(res => {
            expect(200);
          })
      });
    });

    // fit('allows a customer to purchase an item if they have enough money and quantity >= 1', () => {
    //   return request(app)
    //   .post("/api/customer/items/:itemId/purchases")
    //   .then(res => {
    //     expect(res.body.data[0].quantity).toBeTruthy();
    //   }
    // });
  });
});
