const db = require("../../models/index");
const Snack = db.snack;

describe("Snack", () => {
  afterEach(() => {
    return Snack.destroy({ where: {} });
  });

  it("can be persisted", () => {
    return Snack.create({
      description: "Reese's",
      price: 75,
      quantity: 10
    }).then(item => {
      expect(item.id).toBeTruthy();
    });
  });
});
