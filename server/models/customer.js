'use strict';
module.exports = function(sequelize, DataTypes) {
  const customer = sequelize.define('customer', {
    vendor_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER
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
