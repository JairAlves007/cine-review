const express = require('express'); 
const mysql = require('mysql');
const cors = require('cors');
const routes = express.Router();

const db = mysql.createPool({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'cinereview',
   port: 3306
});

routes.use(express.urlencoded( { extended: true } ));

routes.use(express.json());

routes.use(cors());

routes.get('/api/get', (req, res) => {
   const sqlGet = "SELECT * FROM movie_review";
   db.query(sqlGet, (err, result) => {
      res.send(result);
   });
});

routes.post('/api/insert', (req, res) => {
   const movie = req.body.movie;
   const review = req.body.review;
   
   const sqlInsert = `INSERT INTO movie_review (movie, review) VALUES (?, ?)`;

   db.query(sqlInsert, [movie, review], (err, result) => {
      console.log(result);
   });
});

routes.put('/api/update', (req, res) => {
   const id = req.body.id;
   const review = req.body.newReview;
   const sqlUpdate = 'UPDATE movie_review SET review = ? WHERE id = ?';
      
   db.query(sqlUpdate, [review, id], (err, result) => {
      console.log(result)
   })
});

routes.delete('/api/delete/:id', (req, res) => {
   const id = req.params.id;
   const sqlDelete = `DELETE FROM movie_review WHERE id = ?`;
   
   db.query(sqlDelete, id, (err, result) => {
      console.log(result);
   });
});

module.exports = routes;