'use strict';

const userModel = require('./users.js');


module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
};
