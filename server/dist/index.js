"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const port = 3000 || process.env.PORT;
const db_1 = __importDefault(require("./config/db"));
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//get all courseInfo
app.get('/course-info', (req, res) => {
    const query = `SELECT * FROM courseInfo`;
    db_1.default.query(query, (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            console.log(data);
            return res.json(data);
        }
    });
});
//add course info to table
app.post('/course-info', (req, res) => {
    const timestamp = Date.now();
    const formattedTimes = new Date(timestamp).toISOString().replace('T', ' ').split('.')[0];
    const { course, round, roundId } = req.body;
    const query = `INSERT INTO courseInfo (course, round, formattedTimes,roundId) VALUES (?, ?, ?, ?)`;
    db_1.default.query(query, [course, round, formattedTimes, roundId], (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            console.log(data);
            return res.json(data);
        }
    });
});
//add agaps to table
app.post('/agaps', (req, res) => {
    const { hole, par, score, fairway, green, approach, penalty, putts, roundId } = req.body;
    const query = `INSERT INTO agapsTable (hole, par, score, fairway, green, approach, penalty, putts, roundId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db_1.default.query(query, [hole, par, score, fairway, green, approach, penalty, putts, roundId], (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            console.log(data);
            return res.json(data);
        }
    });
});
// get agaps round by roundId
app.get('/agaps/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM agapsTable WHERE roundId = ? LIMIT 18`;
    db_1.default.query(query, [id], (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            console.log(data);
            return res.json(data);
        }
    });
});
// app.post('/agaps', (req: Request, res: Response) => {
//     const getCourseId = `SELECT courseInfo.courseId FROM courseInfo`;
//     console.log(getCourseId);
//     // let { hole, par, score, fairway, green, approach, penalty, putts, roundId = getCourseId } = req.body;
//     // // insert into agapsTable all fields and set roundId to courseInfo.courseId
//     // const query = `INSERT INTO agapsTable (hole, par, score, fairway, green, approach, penalty, putts, roundId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//     // db.query(query, [hole, par, score, fairway, green, approach, penalty, putts, roundId, getCourseId], (err: any, data: any) => {
//     //     if (err) {
//     //         return res.json(err);
//     //     } else {
//     //         console.log(data);
//     //         return res.json(data);
//     //     }
//     // })
// })
// get agaps round by roundId
// app.get('/agaps/:id', (req: Request, res: Response) => {
//     const { id } = req.params;
//     const query = `SELECT * FROM agapsTable WHERE roundId = ? LIMIT 1`;
//     db.query(query, [id], (err: any, data: any) => {
//         if (err) {
//             return res.json(err);
//         } else if (data.length > 0) {
//             console.log(data[0]);
//             return res.json(data[0]);
//         } else {
//             return res.json({ message: 'No data found' });
//         }
//     })
// })
// app.get('/agaps', (req: Request, res: Response) => {
//     const query = `SELECT * FROM agapsTable`;
//     db.query(query, (err: any, data: any) => {
//         if (err) {
//             return res.json(err);
//         } else {
//             console.log(data);
//             return res.json(data);
//         }
//     })
// })
//get all courseInfo
// delete courseInfo and agapsTable by id
app.delete('/course-info/:id', (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM courseInfo WHERE id = ?`;
    db_1.default.query(query, [id], (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            console.log(data);
            return res.json(data);
        }
    });
});
// //delete agapsTable by id
// app.delete('/agaps/:id', (req: Request, res: Response) => {
//     const { id } = req.params;
//     const query = `DELETE FROM agapsTable WHERE id = ?`;
//     db.query(query, [id], (err: any, data: any) => {
//         if (err) {
//             return res.json(err);
//         } else {
//             console.log(data);
//             return res.json(data);
//         }
//     })
// })
// listener
app.listen(3000, () => {
    console.log(`The application is listening on ${port}!`);
});
