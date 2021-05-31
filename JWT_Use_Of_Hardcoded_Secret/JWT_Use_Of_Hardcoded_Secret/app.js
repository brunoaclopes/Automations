'use strict';
const jwt = require('jsonwebtoken');

function generateAccessToken(username) {
    return jwt.sign(username, '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611', { expiresIn: '1800s' });
}

app.post('/api/createNewUser', (req, res) => {
    // ...

    const token = generateAccessToken({ username: req.body.username });
    res.json(token);

    // ...
});