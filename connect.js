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

// get items limit 10
const getBpiCat = (request, response) => {
  con.query('SELECT * FROM bpi_cat ORDER BY BPI_catKey ASC limit 10', (error, results) => {
    if (error) {
      return response.json({ status: "ERROR", error });
    }
    return response.json(results);
  })
}


// get single item
const getBpiCatItem = (request, response) => {
  con.query('SELECT * FROM bpi_cat where BPI_catKey = ?', request.params.id, (error, results) => {
    if (error) {
      return response.json({ status: "ERROR", error });
    }
    return response.json(results);
  }) 
} 

// call stored procedure

const getImageDetails = (request, response) => {
  con.query('call sp_GetImageDetails(' + request.params.id + ')', (error, results) => {
    if (error) {
      return response.json({ status: "ERROR", error });
    }
    return response.json(results);
  }) 
}

// call stored procedure

const getImageProducers = (request, response) => {
  con.query('call sp_GetProducers(' + request.params.id + ')', (error, results) => {
    if (error) {
      return response.json({ status: "ERROR", error });
    }
    return response.json(results);
  }) 
}


  module.exports = {
    getBpiCat,
    getBpiCatItem,
    getImageDetails,
    getImageProducers
  }