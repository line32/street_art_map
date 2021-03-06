'use strict';

module.exports = function(sequelize, DataTypes) {
  var Art = sequelize.define('Art', {
    address: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    long: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    artist: DataTypes.STRING,
    photographer: DataTypes.STRING,
    type: DataTypes.STRING,
    image:  DataTypes.TEXT
  });
  return Art;
};
