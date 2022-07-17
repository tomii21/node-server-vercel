const mysql = require("mysql")
const dotenv = require("dotenv")
require('dotenv').config();
const con = mysql.createConnection(process.env.DATABASE_URL)
con.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("conectado a bd")
    }
})
module.exports = con;