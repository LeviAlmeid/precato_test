const mysql = require('mysql')

var pool = mysql.createPool({
    "user": "root",
    "password": "root",
    "database": "precato",
    "host": "localhost",
    "port": 3306
})

exports.poll = pool