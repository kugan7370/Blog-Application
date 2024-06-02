// migrations/XXXXXX-modify-userId-constraint-on-posts.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Posts', 'Posts_userId_foreign_idx');
    
    await queryInterface.addConstraint('Posts', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'Posts_userId_foreign_idx', // keep the name consistent
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Posts', 'Posts_userId_foreign_idx');

    await queryInterface.addConstraint('Posts', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'Posts_userId_foreign_idx',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'NO ACTION',
      onUpdate: 'CASCADE'
    });
  }
};
