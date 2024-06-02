const express = require('express');
const router = express.Router();
const post = require('../controller/post');


router.post('/add', post.addPost);
router.get('/all', post.getAllPosts);


module.exports = router;