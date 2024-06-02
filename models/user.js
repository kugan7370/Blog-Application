'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post, { foreignKey: 'userId', as: 'posts', onDelete: 'CASCADE', hooks: true });
    }
  }
  
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true 
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Username already in use.',
    }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email already in use.',
      },
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Phone number already in use.',
      },
      
      // add validation
      validate: {
        isNumeric: {
          args: true,
          msg: 'Phone number must be numeric.',
        },

        len: {
          args: [10, 10],
          msg: 'Phone number must be 10 digits long.',
        }
      },
    },
  }, {
    sequelize,
    modelName: 'User', // Use uppercase 'User' to match the typical Sequelize convention
  });

  return User;
};
