const app = require("../../index");
const request = require("supertest");
const db = require("../../models");
const Snack = db.snack;

describe("Snack Router", () => {
  describe("GET /api/customer/snacks - get a list of snacks", () => {
    it("has successful status code", () => {
      return request(app)
      .get("/api/customer/snacks")
      .expect(200);
    });

    it("has a status key in json payload", () => {
      return request(app)
      .get("/api/customer/snacks")
      .then(res => {
        expect(res.body.status).toEqual("success");
      });
    });

    it("has snacks from database", () => {
      return Snack.create({
        description: "Reese's",
        price: 75,
        quantity: 10
      });
      return request(app)
      .get("/api/customer/snacks")
      .then(res => {
        expect(res.body.data[0].description).toEqual("Skittles");
      });
    });
  });
});
