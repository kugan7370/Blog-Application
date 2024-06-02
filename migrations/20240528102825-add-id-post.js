'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Posts',
      'id',
      {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Posts', 'id');
   
  }
};
