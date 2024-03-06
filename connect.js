require('dotenv').config()

const sql = require("mssql");

// environment variables locally in .env file

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    server: process.env.DB_HOST,
    pool: {
      max: 10,
      min: 0
    },
    options: {
      port: 1433,
      encrypt: true, // for azure
      trustServerCertificate: false // change to true for local dev / self-signed cert
    },
    connectionTimeout: 6000, // Connection timeout in milliseconds
    requestTimeout: 4500, // Request timeout in milliseconds
}

//Connect to your database
const con = sql.connect(sqlConfig)
    .then(() => {
        console.log("Connected");
    })
    .catch(err => {
        console.log("Error", err);
    });


// function used by test only
// get items limit 5
const getBpiCat = (response) => {
    var request = new sql.request();
    request.query('SELECT * FROM bpi_cat ORDER BY BPI_catKey ASC FETCH FIRST 5 ROWS ONLY', (error, results) => {
      if (error) {
        return response.json({ status: "ERROR", error });
      }
      return response.send(results);
    }).timeout = 45000;
}

// function used by test only
// get single item
const getBpiCatItem = (request, response) => {
    if(validateBPINumber(request.params.id)){
        var req = new sql.request();
        req.query('SELECT * FROM bpi_cat where BPI_catKey = ?', request.params.id, (error, results) => {
          if (error) {
            return response.json({ status: "ERROR", error });
          }
          return response.send(results);
        }) 
    }
    else {
        return false;
    }
   
} 

// main app functions

const getImageDetails = (request, response) => {
    if(validateBPINumber(request.params.id)){
    new sql.Request()
    .input('id', sql.Int, request.params.id)
    .execute('sp_GetImageDetails', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
    }
    else {
        console.log('validation error')
    }
} 


//  call stored procedure to get inscription
const getImageInscription = (request, response) => {
    new sql.Request()
    .input('id', sql.Int, request.params.id)
    .execute('sp_GetImageInscription', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}

 // call stored procedure to get producers
const getImageProducers = (request, response) => {
    new sql.Request()
    .input('id', sql.Int, request.params.id)
    .execute('sp_GetImageProducers', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}


// get image schools
const getImageSchools = (request, response) => {
    new sql.Request()
    .input('id', sql.Int, request.params.id)
    .execute('sp_GetImageSchools', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}

// getImageSubjects
const getImageSubjects = (request, response) => {
    new sql.Request()
    .input('id', sql.Int, request.params.id)
    .execute('sp_GetImageSubjects', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}

// get image production place
const getImageProductionPlace = (request, response) => {
    new sql.Request()
    .input('id', sql.Int, request.params.id)
    .execute('sp_GetImageProductionPlace', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}

// get image comments
const getImageComments = (request, response) => {
    new sql.Request()
    .input('id', sql.Int, request.params.id)
    .execute('sp_GetImageComments', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}

// get image references
const getBiblioRef = (request, response) => {
    new sql.Request()
    .input('id', sql.Int, request.params.id)
    .execute('sp_GetBiblioRef', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}

// get image dimensions
const getImageDimensions = (request, response) => {
    new sql.Request()
    .input('id', sql.Int, request.params.id)
    .execute('sp_GetImageDimensions', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}

const getImageAssocNames = (request, response) => {
    new sql.Request()
    .input('id', sql.Int, request.params.id)
    .execute('sp_GetImageAssocNames', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}

const getImageAssocTitles = (request, response) => {
    new sql.Request()
    .input('id', sql.Int, request.params.id)
    .execute('sp_GetImageAssocTitles', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}

const getAllImageDetails = (request, response) => {
    new sql.Request()
    .input('id', sql.Int, request.params.id)
    .execute('sp_GetAllImageDetails', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}

const getImageLocation = (request, response) => {
    new sql.Request()
    .input('id', sql.Int, request.params.id)
    .execute('sp_GetAllImageLocation', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}

// stored procedures that take an 'item' VARCHAR(50)

const getImagesBySubject = (request, response) => {
    new sql.Request()
    .input('item', sql.VarChar(50), request.params.item)
    .execute('sp_GetImagesBySubject', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}

const getImagesBySubjectIndex = (request, response) => {
    new sql.Request()
    .input('item', sql.VarChar(50), request.params.item)
    .execute('sp_GetImagesBySubjectIndex', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}

const getImagesByEvent = (request, response) => {
    new sql.Request()
    .input('item', sql.VarChar(50), request.params.item)
    .execute('sp_GetImagesByEvent', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}

const getImagesByEventDate = (request, response) => {
    new sql.Request()
    .input('item', sql.VarChar(50), request.params.item)
    .input('min', sql.Int, request.params.min)
    .input('max', sql.Int, request.params.max)
    .execute('sp_GetImagesByEventDate', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}


const getImagesByPerson = (request, response) => {
    new sql.Request()
    .input('item', sql.VarChar(50), request.params.item)
    .execute('sp_GetImagesByPerson', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}

const getImagesByProducer = (request, response) => {
    new sql.Request()
    .input('item', sql.VarChar(50), request.params.item)
    .execute('sp_GetImagesByProducer', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}

const getImagesByProducerDate = (request, response) => {
    new sql.Request()
    .input('item', sql.VarChar(50), request.params.item)
    .input('min', sql.Int, request.params.min)
    .input('max', sql.Int, request.params.max)
    .execute('sp_GetImagesByProducerDate', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}

const getImagesByLabelSearch = (request, response) => {
    new sql.Request()
    .input('item', sql.VarChar(50), request.params.item)
    .execute('sp_GetImagesByLabelSearch', (error, result) => {
        if(error){
            return response.json({ status: "ERROR", error });
        }
        return response.json(result);
    })
}


//validate bpi_number
function validateBPINumber(BPI_number){
try {
    if(isNaN(BPI_number)) throw "not a number";
    BPI_number = Number(BPI_number);
    if(BPI_number <= 0) throw "too low";
    if(BPI_number > 10186) throw "too high";
    }
    catch(err) {
    console.log(err);
    }
    return true;
}

//validate item
function validateSearchItem(item) {
try {
    if(item.trim() == "") throw "empty";
    if(item.length <= 0) throw "too low";
    if(item.length > 50) throw "too high";
    }
    catch(err) {
    console.log(err);
    }
    return true;
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
    getImageComments,
    getBiblioRef,
    getImageDimensions,
    getImageAssocNames,
    getImageAssocTitles,
    getImagesBySubject,
    getImagesBySubjectIndex,
    getImagesByEvent,
    getImagesByEventDate,
    getImagesByPerson,
    getImagesByProducer,
    getImagesByProducerDate,
    getAllImageDetails,
    getImageLocation,
    getImagesByLabelSearch,
    con,
    sql,
    sqlConfig
}