'use strict';

var sql = require("mssql");
var name;

var config = {
    user: "TestUser",
    password: "1234567890",
    server: 'localhost',
    database: "TestDB",
    options: {
        trustServerCertificate: true
    }
};

sql.connect(config, function (err) {

    if (err) console.log(err);

    var request = new sql.Request();

    request.query('SELECT * from Users', function (err, results) {

        if (err) console.log(err);

        name = results.recordset[0].UserName;

        console.log(name);

        var requestInsert = new sql.Request();
        console.log(name);
        requestInsert.query("INSERT INTO Users VALUES ('" + name + "')", function (err) {
            if (err) console.log(err)
        });
    });
});