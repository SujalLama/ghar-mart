'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('properties', 'road', {type: Sequelize.STRING});
    await queryInterface.addColumn('properties', 'direction', {type: Sequelize.STRING});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('properties', 'road');
    await queryInterface.removeColumn('properties', 'direction');
  }
};
