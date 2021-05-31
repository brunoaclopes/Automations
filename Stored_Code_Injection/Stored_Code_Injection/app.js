'use strict';
const exec = require('child_process').exec;
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

sql.connect(config, (err) => {

    if (err) console.log(err);

    var request = new sql.Request();

    request.query('SELECT code from CodeTable', (err, results) => {

        if (err) console.log(err);

        exec(results.recordset[0].code, (err, output) => {
            if (err) {
                console.log(err.message);
                return;
            }
            console.log(output);
        });
    });
});