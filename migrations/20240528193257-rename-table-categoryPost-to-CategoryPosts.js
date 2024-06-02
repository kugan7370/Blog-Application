'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.renameTable('categoryPost', 'CategoryPosts');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable('CategoryPosts', 'categoryPost');
  }
};
