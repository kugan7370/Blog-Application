const express = require('express');
const user = require('./user');
const post = require('./post');
const category = require('./category');


const app = express();


app.use('/user', user);
app.use('/post', post);
app.use('/category',category);

module.exports = app;