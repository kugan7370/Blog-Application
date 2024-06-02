const { User } = require('../models');
const { createError } = require('../utils/createError');

 const register = async(req, res,next) => {
    const { name, email, password,phone } = req.body;

    if (!name || !email || !password || !phone) {
        return next(createError(400, 'Please provide all required fields.'));
    }
   
    try {
        const newUser = await User.create(req.body);
       return res.status(201).json(newUser);
        
    } catch (error) {
        console.log("🚀 ~ register ~ error:", error)
       next(error);
          
    }
  
}

 const login = async(req, res) => {
    res.send('Login');
}

const getAllUsers = async(req, res, next) => {
    try {
        const users = await User.findAll({
            include: [{
                association: 'posts',
                include: {
                    association: 'user',
                }
   
            },
            
            ]
        });
        return res.status(200).json(users);
    } catch (error) {
        console.log("🚀 ~ getAllUsers ~ error:", error);
        next(error);
    }
}

const deleteUser = async(req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return next(createError(404, 'User not found.'));
        }
        await user.destroy();
        return res.status(204).send("user deleted successfully.");
    } catch (error) {
        console.log("🚀 ~ deleteUser ~ error:", error);
        next(error);
    }
}


module.exports = {
    register,
     login,
    getAllUsers,
    deleteUser
    };
