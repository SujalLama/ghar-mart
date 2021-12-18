'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('properties', 'categoryId', {
      type: Sequelize.INTEGER,
      references: {
        key: 'id',
        model: 'categories'
      }
    },{timestamps: false})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('properties', 'categoryId');
  }
};
