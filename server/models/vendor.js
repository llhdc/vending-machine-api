'use strict';
module.exports = function(sequelize, DataTypes) {
  var vendor = sequelize.define('vendor', {
    customer_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return vendor;
};