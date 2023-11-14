require('dotenv').config()

const express = require('express');
const router = express.Router();
const db = require('./connect')
const app = express()
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.DB_PORT;


const corsOptions = {
    origin: process.env.REFERRER_URL
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Allow app to server static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));  

/* GET home page. */
 app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  }); 

// api function
app.get('/api/bpi_cat', db.getBpiCat);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("BPI listening");
});

module.exports = router;