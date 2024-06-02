'use strict';

const { Model ,DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    class Category extends Model {
        static associate(models) {
           Category.belongsToMany(models.Post, {through: 'CategoryPost', foreignKey: 'categoryId', as: 'posts'});
        }
    }

    Category.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Category',
    });

    return Category;
};
