'use strict';
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/', (req, res) => {
    const user = new User(req.body.user);
    user.save();
});

module.exports = router;
