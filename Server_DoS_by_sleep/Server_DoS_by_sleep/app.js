'use strict';
var express = require('express');
var router = express.Router();

router.get('/', req => {
    const time = req.query.time;

    function1();
    setTimeout(function2, time);

});

function function1() {
    console.log('Welcome to My Console,');
}

function function2() {
    console.log('Blah blah blah blah extra-blah');
}
