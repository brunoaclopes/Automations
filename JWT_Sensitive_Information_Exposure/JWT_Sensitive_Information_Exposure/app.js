'use strict';
const jwt = require('jsonwebtoken');
const key = require('crypto').randomBytes(64).toString('hex');

function generateAccessToken(password) {
    return jwt.sign(password, key, { expiresIn: '1800s' });
}

app.post('/api/createNewUser', (req, res) => {
    // ...

    const token = generateAccessToken({ password: req.body.password });
    res.json(token);

    // ...
});