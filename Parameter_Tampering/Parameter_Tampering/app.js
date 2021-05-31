'use strict';
var express = require('express');
var router = express.Router();

var sql = require("mssql");

var config = {
    user: "TestUser",
    password: "1234567890",
    server: 'localhost',
    database: "TestDB",
    options: {
        trustServerCertificate: true
    }
};

/* GET users listing. */
router.get('/', (req, res) => {
    const name = req.query.name;

    sql.connect(config, (err) => {

        if (err) res.status(500).send(err.message);

        var request = new sql.Request();

        request.query("SELECT * from Users where userName = '" + name + "'", (err, results) => {

            if (err) res.status(500).send(err.message);

            picture = results.recordset[0].picture;

            res.send(picture);
        });
    });

});

module.exports = router;