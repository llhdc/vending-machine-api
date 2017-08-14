'use strict';
module.exports = function(sequelize, DataTypes) {
  var snack = sequelize.define('snack', {
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return snack;
};