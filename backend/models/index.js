'use strict';

const Sequelize = require('sequelize');
const {sequelize} = require('../config/db');

const db = {
  Property: require('./propertyModel')(sequelize, Sequelize.DataTypes),
  Category: require('./categoryModel')(sequelize, Sequelize.DataTypes),
};

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
