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
        return response.json({ status: "ERROR"});
    }
} 


//  call stored procedure to get inscription
const getImageInscription = (request, response) => {
    if(validateBPINumber(request.params.id)){
        new sql.Request()
        .input('id', sql.Int, request.params.id)
        .execute('sp_GetImageInscription', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "ERROR"});
    }    
}

 // call stored procedure to get producers
const getImageProducers = (request, response) => {
    if(validateBPINumber(request.params.id)){
        new sql.Request()
        .input('id', sql.Int, request.params.id)
        .execute('sp_GetImageProducers', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "ERROR"});
    }       
}


// get image schools
const getImageSchools = (request, response) => {
    if(validateBPINumber(request.params.id)){
        new sql.Request()
        .input('id', sql.Int, request.params.id)
        .execute('sp_GetImageSchools', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "ERROR"});
    }     
}

// getImageSubjects
const getImageSubjects = (request, response) => {
    if(validateBPINumber(request.params.id)){
        new sql.Request()
        .input('id', sql.Int, request.params.id)
        .execute('sp_GetImageSubjects', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "ERROR"});
    }      
}

// get image production place
const getImageProductionPlace = (request, response) => {
    if(validateBPINumber(request.params.id)){
        new sql.Request()
        .input('id', sql.Int, request.params.id)
        .execute('sp_GetImageProductionPlace', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "ERROR"});
    }      
}

// get image comments
const getImageComments = (request, response) => {
    if(validateBPINumber(request.params.id)){
        new sql.Request()
        .input('id', sql.Int, request.params.id)
        .execute('sp_GetImageComments', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "ERROR"});
    }       
}

// get image references
const getBiblioRef = (request, response) => {
    if(validateBPINumber(request.params.id)){
        new sql.Request()
        .input('id', sql.Int, request.params.id)
        .execute('sp_GetBiblioRef', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "ERROR"});
    }        
}

// get image dimensions
const getImageDimensions = (request, response) => {
    if(validateBPINumber(request.params.id)){
        new sql.Request()
        .input('id', sql.Int, request.params.id)
        .execute('sp_GetImageDimensions', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "ERROR"});
    }       
}

const getImageAssocNames = (request, response) => {
    if(validateBPINumber(request.params.id)){
        new sql.Request()
        .input('id', sql.Int, request.params.id)
        .execute('sp_GetImageAssocNames', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "ERROR"});
    }        
}

const getImageAssocTitles = (request, response) => {
    if(validateBPINumber(request.params.id)){
        new sql.Request()
        .input('id', sql.Int, request.params.id)
        .execute('sp_GetImageAssocTitles', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "ERROR"});
    }       
}

const getAllImageDetails = (request, response) => {
    if(validateBPINumber(request.params.id)){
        new sql.Request()
        .input('id', sql.Int, request.params.id)
        .execute('sp_GetAllImageDetails', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "ERROR"});
    }      
}

const getImageLocation = (request, response) => {
    if(validateBPINumber(request.params.id)){
        new sql.Request()
        .input('id', sql.Int, request.params.id)
        .execute('sp_GetAllImageLocation', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "ERROR"});
    }         
}

// stored procedures that take an 'item' VARCHAR(50)

const getImagesBySubject = (request, response) => {
    const decodedItem = decodeURI(request.params.item);
    if(validateSearchItem(decodedItem)){
        new sql.Request()
        .input('item', sql.VarChar(50), request.params.item)
        .execute('sp_GetImagesBySubject', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "Invalid text"});
    }       
}

const getImagesBySubjectIndex = (request, response) => {
    const decodedItem = decodeURI(request.params.item);
    if(validateSearchItem(decodedItem)){
        new sql.Request()
        .input('item', sql.VarChar(50), request.params.item)
        .execute('sp_GetImagesBySubjectIndex', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "Invalid text"});
    }      
}

const getImagesByEvent = (request, response) => {
    const decodedItem = decodeURI(request.params.item);
    if(validateSearchItem(decodedItem)){
        new sql.Request()
        .input('item', sql.VarChar(50), request.params.item)
        .execute('sp_GetImagesByEvent', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "Invalid text"});
    }     
}

const getImagesByEventDate = (request, response) => {
    const decodedItem = decodeURI(request.params.item);
    if(validateSearchItem(decodedItem)){
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
    else {
        return response.json({ status: "Invalid text"});
    }       
}


const getImagesByPerson = (request, response) => {
    const decodedItem = decodeURI(request.params.item);
    if(validateSearchItem(decodedItem)){
        new sql.Request()
        .input('item', sql.VarChar(50), request.params.item)
        .execute('sp_GetImagesByPerson', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "Invalid text"});
    }       
}

const getImagesByProducer = (request, response) => {
    const decodedItem = decodeURI(request.params.item);
    if(validateSearchItem(decodedItem)){
        new sql.Request()
        .input('item', sql.VarChar(50), request.params.item)
        .execute('sp_GetImagesByProducer', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "Invalid text"});
    }       
}

const getImagesByProducerDate = (request, response) => {
    const decodedItem = decodeURI(request.params.item);
    if(validateSearchItem(decodedItem)){
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
    else {
        return response.json({ status: "Invalid text"});
    }       
}

const getImagesByLabelSearch = (request, response) => {
    const decodedItem = decodeURI(request.params.item);
    if(validateSearchItem(decodedItem)){
        new sql.Request()
        .input('item', sql.VarChar(50), request.params.item)
        .execute('sp_GetImagesByLabelSearch', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "Invalid text"});
    }       
}

const getImagesByTechnique = (request, response) => {
    if(validateSearchItem(request.params.item)){
        new sql.Request()
        .input('item', sql.VarChar(50), request.params.item)
        .execute('sp_GetImagesBytechnique', (error, result) => {
            if(error){
                return response.json({ status: "ERROR", error });                  
            }
            return response.json(result);
        })
    }
    else {
        return response.json({ status: "Invalid text"});
    }       
}

//validate bpi_number
function validateBPINumber(BPI_number){   
  try {
    if(isNaN(BPI_number) || BPI_number <= 0 || BPI_number > 10186) {
        return false;
    }
    return true;
    } 
    catch(err) {
        console.log(err);
    }  
}

//validate item
function validateSearchItem(item) {
try {
    const isAlphaWithWhitespace = str => /^[a-zA-Z\s']*$/.test(str);
    if(!isAlphaWithWhitespace(item) || item.length <= 3 || item.length > 50) {
        return false;
    }
    return true;
    } 
    catch(err) {
        console.log(err);
    }     
}


module.exports = {
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
    getImagesByTechnique,
    con,
    sql,
    sqlConfig
}