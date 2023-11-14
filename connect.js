require('dotenv').config()

var mysql = require('mysql2');

var con = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/*const getBpiCat = (request, response) => {
    con.query('SELECT * FROM bpi_cat ORDER BY BPI_catKey ASC limit 10', (error, results, fields) => {
      if (error) {
        throw error
      }
      response.status(200)
      return results;
    })
  } */

  const getBpiCat = (request, response) => {
    con.query('SELECT * FROM bpi_cat ORDER BY BPI_catKey ASC limit 10', (error, results) => {
      if (error) {
        return response.json({ status: "ERROR", error });
      }
      return response.json(results);
    })
  }


  module.exports = {
    getBpiCat,
  }