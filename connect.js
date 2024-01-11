require('dotenv').config()

var mysql = require('mysql2');

var con = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

// connect to database 
con.connect(function(err) {
  if (err) throw err;
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

// call stored procedure to get schools

const getImageInscription = (request, response) => {
  con.query('call sp_GetImageInscription(' + request.params.id + ')', (error, results) => {
    if (error) {
      return response.json({ status: "ERROR", error });
    }
    return response.json(results);
  }) 
}

// call stored procedure to get producers

const getImageProducers = (request, response) => {
  con.query('call sp_GetImageProducers(' + request.params.id + ')', (error, results) => {
    if (error) {
      return response.json({ status: "ERROR", error });
    }
    return response.json(results);
  }) 
}

// call stored procedure to get schools

const getImageSchools = (request, response) => {
  con.query('call sp_GetImageSchools(' + request.params.id + ')', (error, results) => {
    if (error) {
      return response.json({ status: "ERROR", error });
    }
    return response.json(results);
  }) 
}

const getImageSubjects = (request, response) => {
  con.query('call sp_GetImageSubjects(' + request.params.id + ')', (error, results) => {
    if (error) {
      return response.json({ status: "ERROR", error });
    }
    return response.json(results);
  }) 
}

const getImageProductionPlace = (request, response) => {
  con.query('call sp_GetImageProductionPlace(' + request.params.id + ')', (error, results) => {
    if (error) {
      return response.json({ status: "ERROR", error });
    }
    return response.json(results);
  }) 
}


const getBiblioRef = (request, response) => {
  con.query('call sp_GetBiblioRef(' + request.params.id + ')', (error, results) => {
    if (error) {
      return response.json({ status: "ERROR", error });
    }
    return response.json(results);
  }) 
}

const getImageDimensions = (request, response) => {
  con.query('call sp_GetImageDimensions(' + request.params.id + ')', (error, results) => {
    if (error) {
      return response.json({ status: "ERROR", error });
    }
    return response.json(results);
  }) 
}

const getImageAssocName = (request, response) => {
  con.query('call sp_GetImageAssocName(' + request.params.id + ')', (error, results) => {
    if (error) {
      return response.json({ status: "ERROR", error });
    }
    return response.json(results);
  }) 
}

const getImagesBySubject = (request, response) => {
  con.query('call sp_GetImagesBySubject('+ "'" + request.params.item + "'" + ')', (error, results) => {
    if (error) {
      return response.json({ status: "ERROR", error });
    }
    return response.json(results);
  }) 
}


const getImagesBySubjectIndex = (request, response) => {
  con.query('call sp_GetImagesBySubject('+ "'" + request.params.item + "'" + ')', (error, results) => {
    if (error) {
      return response.json({ status: "ERROR", error });
    }
    return response.json(results);
  }) 
}

const getImagesByEvent = (request, response) => {
  con.query('call sp_GetImagesByEvent('+ "'" + request.params.item + "'" + ')', (error, results) => {
    if (error) {
      return response.json({ status: "ERROR", error });
    }
    return response.json(results);
  }) 
}

const getAllImageDetails = (request, response) => {
  con.query('call sp_GetAllImageDetails(' + request.params.id + ')', (error, results) => {
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
  getImageInscription,
  getImageProducers,
  getImageSchools,
  getImageSubjects,
  getImageProductionPlace,
  getBiblioRef,
  getImageDimensions,
  getImageAssocName,
  getImagesBySubject,
  getImagesBySubjectIndex,
  getImagesByEvent,
  getAllImageDetails,
  con
}