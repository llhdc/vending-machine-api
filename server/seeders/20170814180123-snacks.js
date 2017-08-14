'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("snacks",[
      {
        description: "Corn chips",
        price: 65,
        quantity: 4,
        createdAt: new Date(),
        updatedAt: new Date()

      }, {
        description: "Gum",
        price: 35,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: "Chocolate bar",
        price: 70,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: "KIND bar",
        price: 45,
        quantity: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("todos", null, {});
  }
};
