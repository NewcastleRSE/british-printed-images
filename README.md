# British Printed Images

## About


Brtish Printed Images is a rebuild of a legacy website ([https://bpi1700.org.uk/](https://bpi1700.org.uk/)). The site is digital library of prints and book illustrations from Early Modern Britain, with images ranging from 1550 to 1815. The site allows searching by BPI number, subject, person and producer/printmaker and technique. The BPI number is an internal classfication system that has no links to other digital libraries. 

### Project Team
Adam Morton, Newcastle University  ([adam.morton@newcastle.ac.uk](mailto:adam.morton@newcastle.ac.uk))  
Becky Osselton, Newcastle University  ([rebecca.osselton@newcastle.ac.uk](mailto:rebecca.osselton@newcastle.ac.uk)) 
 

### RSE Contact
Becky Osselton 
RSE Team  
Newcastle University  
([rebecca.osselton@newcastle.ac.uk](mailto:rebecca.osselton@newcastle.ac.uk))  

## Built With

[Express](https://expressjs.com/) 

The database is a sqlserver database hosted on Azure, under the subscription 'british-printed-images'.

## Getting Started

The application is built using Express.js and will run on Node 18, 20. The client is build in Vue.js.

### Prerequisites

Node.js
Express

### Installation

`npm install` to install all dependencies

### Running Locally

Create an .env file containing the following variables: 

```
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
DB_PORT=
```

These will connect to the live Azure database.

Start the server running with `node app.js`. This starts the application running on localhost:3000. The client repo is at: [bpi-vue-client](https://github.com/NewcastleRSE/bpi-vue-client), and is Vue.js application which will run on localhost:8080. 

### Running Tests

Jest has been used as the test library. Execute database tests with the command below. The tests connect to the live database, so it may be necessary to whitelist an IP through Azure before the tests will run.

`npm test`

### Production deployment

The two parts of the application need to be brought togther as one code base. The client repository needs to be built and minified locally and then the build files copied into this repository public folder. The client application files build into a 'dist' folder, which can be placed inside the public folder of this repository. Then this repo is deployed through GitHub actions on a push to main branch.

## Roadmap

- [x] Initial Research  
- [x] Minimum viable product   
- [x] Alpha Release  
- [x] Feature-Complete Release  

## Contributing

Kings College Digital Lab, London.

## Acknowledgements

This work was funded by a grant from the AHRC.



