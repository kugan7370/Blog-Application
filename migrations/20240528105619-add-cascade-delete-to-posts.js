'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Remove the existing foreign key constraint
    await queryInterface.removeConstraint('Posts', 'Posts_userId_foreign_idx');
    
    // Add the new foreign key constraint with ON DELETE CASCADE
    await queryInterface.addConstraint('Posts', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'Posts_userId_foreign_idx', // Ensure this matches your constraint name
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revert the constraint changes
    await queryInterface.removeConstraint('Posts', 'Posts_userId_foreign_idx');

    await queryInterface.addConstraint('Posts', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'Posts_userId_foreign_idx', // Ensure this matches your constraint name
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });
  }
};