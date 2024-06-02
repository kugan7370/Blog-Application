const {Post,Category} = require('../models');
const {createError} = require('../utils/createError');


const addPost = async(req, res, next) => {
    const {title, content, userId, categoryIds,count} = req.body;
    try {
        const newPost = await Post.create({
            title,
            content,
            userId,
        });
        await newPost.addCategories(categoryIds);
    
        return res.status(201).json(newPost);

    } catch (error) {
        console.log("🚀 ~ addPost ~ error:", error);
        next(error);
    }
}

const getAllPosts = async(req, res, next) => {
    try {
        const posts = await Post.findAll({
            include: [{
                association: 'user',
                
            },
            {
                association: 'categories',
                

            }]
        });
        return res.status(200).json(posts);
    } catch (error) {
        console.log("🚀 ~ getAllPosts ~ error:", error);
        next(error);
    }
}

module.exports = {
    addPost,
    getAllPosts
};