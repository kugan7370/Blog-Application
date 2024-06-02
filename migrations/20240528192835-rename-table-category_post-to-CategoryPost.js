'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable('category_post', 'CategoryPost');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable('CategoryPost', 'category_post');
  }
};
