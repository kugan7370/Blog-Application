'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class CategoryPost extends Model {
        static associate(models) {
            CategoryPost.belongsTo(models.Post, { foreignKey: 'postId', as: 'post', onDelete: 'CASCADE', hooks: true });
            CategoryPost.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category', onDelete: 'CASCADE', hooks: true });
        }
    }

    CategoryPost.init({
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'CategoryPost',
    });

    return CategoryPost;
}