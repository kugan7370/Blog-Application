const express = require('express');
const router = express.Router();

const category = require('../controller/category');

router.post('/add', category.addCategory);
router.get('/getAll', category.getAllCategories);
router.post('/addCategoryToPost', category.addCategoryToPost);

module.exports = router;