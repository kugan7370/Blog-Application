const express = require('express');
const user = require('../controller/user');



const router = express.Router();


router.post('/register', user.register);

router.post('/login', user.login);
router.get('/all', user.getAllUsers);
router.delete('/delete/:id', user.deleteUser);




module.exports = router;