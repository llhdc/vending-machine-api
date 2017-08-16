'use strict';

module.exports = function(sequelize, DataTypes) {
  const snack = sequelize.define('snack', {
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        snack.hasMany(customer, { foreignKey: 'snackId' });
      }
    }
  });
  return snack;
};
