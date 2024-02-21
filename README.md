# British Printed Images

## About

Brtish Printed Images is a rebuild of a legacy website at ([https://bpi1700.org.uk/](https://bpi1700.org.uk/)). The site is digital library of prints and book illustrations from Early Modern Britain, with images ranging from 1550 to 1815. The site allwws swearching by BPI number, subject, event, person and producer. The BPI number is an internal classfication system that has no links to other digital libraries. 

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
[Tailwind](https://tailwindcss.com/) 

The database is a sqlserver database hosted on Azure.

## Getting Started

The application is built using Express.js and will run on Node 18, 21. 

### Prerequisites

Node.js
Tailwind

### Installation

`npm install` to install all dependencies

### Running Locally

Create an .env file containing the following variables: 

DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
DB_PORT=

These will connect to the Azure database.

Start the server running with `node app.js`

### Running Tests

Jest has been used as the test library. Execute database tests with the command below.

`npm test`

## Deployment

### Local 

### Production

## Usage

## Roadmap

- [x] Initial Research  
- [ ] Minimum viable product 
- [ ] Alpha Release  
- [ ] Feature-Complete Release  


## Acknowledgements
This work was funded by a grant from AHRC. 
