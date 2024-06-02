'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
   

    // need to add createdAt, updatedAt columns to the Posts table
    await queryInterface.addColumn(
      'Posts',
      'createdAt',
      {
        allowNull: false,
        type: Sequelize.DATE,
      }
    );

    await queryInterface.addColumn(
      'Posts',
      'updatedAt',
      {
        allowNull: false,
        type: Sequelize.DATE,
      }
    );

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Posts', 'createdAt');
    await queryInterface.removeColumn('Posts', 'updatedAt');
  }
};
