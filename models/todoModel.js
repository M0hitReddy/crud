// import mysql from 'mysql';
// const connection = mysql.createConnection({
//     host: 'https://qinjibrzhcbeniozyxyo.supabase.co',
//     user: 'root',
//     password: 'root',
//     database: 'todo'
// });
// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL database:', err.message);
//         return;
//     }
//     console.log('Connected to MySQL database');
// });
// const sql = `
//             CREATE TABLE IF NOT EXISTS todos (
//                 id INT AUTO_INCREMENT PRIMARY KEY,
//                 title VARCHAR(255) NOT NULL,
//                 description TEXT,
//                 completed BOOLEAN DEFAULT 0,
//                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//             )
//         `;
// connection.query(sql, (err) => {
//     if (err) {
//         console.error('Error creating todos table:', err.message);
//         return;
//     }
//     console.log('Created todos table');
// })


// import express, { json } from 'express';


// const get = async (req,res) => {
//     const { data, error } = await superbase
//         .from('todo')
//         .select('*')
//         .limit(10)
//     if (error) {
//         console.error(error)
//         return
//     }
//     console.log(JSON.stringify(data, null, 2))
// }
// const insert = async (data) => {
//     superbase.from('todo').insert(data).then((data,err) => {
//         console.log("posted ----------------------------- "+err+JSON.stringify(data, null, 2))
//     });
// }
// async function truncateTable() {
//     const { data, error } = await superbase
//         .rpc('todo');

//     if (error) {
//         console.error(error);
//         return;
//     }

//     console.log('Table truncated successfully');
// }

// const data = [
//     { title: 'Learn to code', description: 'Learn to code in JavaScript' },
//     { title: 'Build a project', description: 'Build a project using Node.js and Express' }
// ]
// const run = async () => {
//     await get()
//     await insert(data)
//     await get()
//     await truncateTable()
// }
// run()
// superbase.from('todo')
// insert(data)