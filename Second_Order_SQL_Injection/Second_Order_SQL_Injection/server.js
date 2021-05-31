'use strict';
var Request = require('tedious').Request;
var Connection = require('tedious').Connection;
var connection;

function InitConnection() {
    var config = {
        server: 'localhost',
        authentication: {
            type: 'default',
            options: {
                userName: "TestUser",
                password: "1234567890"
            }
        },
        options: {
            trustServerCertificate: true,
            database: "TestDB"
        }
    };
    connection = new Connection(config)
    connection.on('connect', (err) => {
        executeStatement();
        console.log("Connected");
    });
    connection.connect();
}

function executeStatement() {
    var request = new Request("SELECT * from Users", (err) => {
        if (err) console.log(err);
    });
    var result = "";

    request.on('row', (columns) => {
        columns.forEach((column) => {
            if (column.value === null) {
                console.log('NULL');
            } else {
                result += column.value + " ";
            }
        });
        console.log(result);
    });

    request.on('requestCompleted', () => {
        var requestInsert = new Request("INSERT INTO Users VALUES ('" + result + "')", (err) => {
            if (err) console.log(err);
        });
        requestInsert.on('requestCompleted', () => console.log("Inserted!"));
        connection.execSql(requestInsert);
        result = "";
    });

    request.on('done', () => {
        console.log(rowCount + 'rows returned');
    });

    connection.execSql(request);
}

InitConnection();