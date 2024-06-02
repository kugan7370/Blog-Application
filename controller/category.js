const {Category} = require('../models')
const {CategoryPost} = require('../models')
const {Post} = require('../models')
const {createError} = require('../utils/createError')

const addCategory = async(req, res, next) => {
    const {name} = req.body;
    try {
        const newCategory = await Category.create(req.body);
        return res.status(201).json(newCategory);
    } catch (error) {
        console.log("🚀 ~ addCategory ~ error:", error);
        next(error);
    }
}

const addCategoryToPost = async(req, res, next) => {
    try {
        const {postId, categoryId} = req.body;
        const post = await Post.findByPk(postId);
        if (!post) {
            return next(createError(404, 'Post not found.'));
        }
        const category = await Category.findByPk(categoryId);
        if (!category) {
            return next(createError(404, 'Category not found.'));
        }
        const newCategoryPost = await CategoryPost.create({postId, categoryId});
        return res.status(201).json(newCategoryPost);
    }
    catch (error) {
        console.log("🚀 ~ addCategoryToPost ~ error:", error);
        next(error);
    }
}

const getAllCategories = async(req, res, next) => {
    try {
        const categories = await Category.findAll({
            // include: [{
            //     association: 'posts',
            //     attributes: ['title', 'content', 'createdAt', 'updatedAt'],
            //     include: {
            //         association: 'user',
            //     }
               
            // }]
        });
        return res.status(200).json(categories);
    } catch (error) {
        console.log("🚀 ~ getAllCategories ~ error:", error);
        next(error);
    }
}

module.exports = {
    addCategory,
    addCategoryToPost,
    getAllCategories
};