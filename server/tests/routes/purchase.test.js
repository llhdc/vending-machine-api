const app = require("../../index");
const db = require("../../models/index");
const request = require("supertest");

describe('Purchase router', () => {
  describe('POST /api/customer/items/:itemId/purchases', () => {
    it("has successful status code", () => {
      return request(app)
      .post("/api/customer/items/:itemId/purchases")
      .expect(200);
    });
    //
    // it('allows a customer to purchase an item if they have enough money and quantity > 1', () => {
    //   return request(app)
    //   .post("/api/customer/items/:itemId/purchases")
    //   .expect()
    // });

  });
});
