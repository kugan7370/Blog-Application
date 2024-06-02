'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Post extends Model {
        static associate(models) {
            Post.belongsTo(models.User, { foreignKey: 'userId', as: 'user', onDelete: 'CASCADE', hooks: true });
            Post.belongsToMany(models.Category, {through: 'CategoryPost', foreignKey: 'postId', as: 'categories'});
        
        // define association here
        }
    }
    
    Post.init({
        title: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        content: {
        type: DataTypes.TEXT,
        allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
          }
    }, {
        sequelize,
        modelName: 'Post',
    });
    
    return Post;
    }
