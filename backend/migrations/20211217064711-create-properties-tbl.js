'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('properties', {
     id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
     },
     title: {
       type: Sequelize.STRING,
       allowNull: false,
     },
     address: {
       type: Sequelize.STRING,
       allowNull: false,
     },
     price: {
       type: Sequelize.INTEGER,
     },
     bed: {
      type: Sequelize.INTEGER
     },
     bath: {
      type: Sequelize.INTEGER
     },
     area: {
      type: Sequelize.STRING
     },
     isVerrified: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
     },
     onSale: {
       type: Sequelize.BOOLEAN,
       defaultValue: false,
     },
     attachments: {
      type: Sequelize.ARRAY(Sequelize.STRING)
     },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
   }, {timeStamps: true})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('properties');
  }
};
