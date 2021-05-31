'use strict';
const jwt = require('jsonwebtoken');
const key = require('crypto').randomBytes(64).toString('hex');

function generateAccessToken(username) {
    return jwt.sign(username, key, {});
}

app.post('/api/createNewUser', (req, res) => {
    // ...

    const token = generateAccessToken({ username: req.body.username });
    res.json(token);

    // ...
});