const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

// const db = mysql.createConnection({
//     host: process.env.host,
//     user: process.env.user,
//     password: process.env.password,
//     database: process.env.database

// });

// try {
//     db.connect((err: any) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(`Connected to ${process.env.host}`);
//         }
//     })
// } catch (error) {

// }
// export default db

//create pool of connections
const db = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

export default db