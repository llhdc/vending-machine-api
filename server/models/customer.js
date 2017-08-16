'use strict';
module.exports = function(sequelize, DataTypes) {
  const customer = sequelize.define('customer', {
    cashOnHand: DataTypes.INTEGER,
    snackId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        customer.hasMany(snack, { foreignKey: 'customerId' });
      }
    }
  });
  return customer;
};
