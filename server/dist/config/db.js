"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});
try {
    db.connect((err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(`Connected to ${process.env.host}`);
        }
    });
}
catch (error) {
}
exports.default = db;
