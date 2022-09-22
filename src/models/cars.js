'use strict';

const carsSchema = (sequelize, DataTypes) => sequelize.define(
  'Cars',
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }
);

module.exports = carsSchema;