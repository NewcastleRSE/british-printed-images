
const Sentry = require('@sentry/node');
const { ProfilingIntegration } = require('@sentry/profiling-node');
const path = require('path');
const db = require('./connect')
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()

// Sentry stuff

Sentry.init({
  dsn: 'https://ac3dcfad4680f5a7f636635be8f21708@o1080315.ingest.sentry.io/4506032524820480',
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    new ProfilingIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
});

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

// The error handler must be registered before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

// test function to check if sentry works
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

///////////////////////////////////////////////////////////////

// Public folder config

// Allow app to server static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// enables all CORS requests
app.use(cors())

// general config
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// database connection
const port = process.env.PORT || 3000;
const closeConnection = db.con;

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`)
}) 

// api functions

// get the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


// api request call functions in the imported connect.js file
app.get('/api/bpi_cat', db.getBpiCat)
app.get('/api/bpi_cat/:id', db.getBpiCatItem);
app.get('/api/image_details/:id', db.getImageDetails);
app.get('/api/image_inscription/:id', db.getImageInscription);
app.get('/api/image_producers/:id', db.getImageProducers);
app.get('/api/image_schools/:id', db.getImageSchools);
app.get('/api/image_production_place/:id', db.getImageProductionPlace);
app.get('/api/image_comments/:id', db.getImageComments);
app.get('/api/image_subjects/:id', db.getImageSubjects);
app.get('/api/biblio_ref/:id', db.getBiblioRef);
app.get('/api/image_dimensions/:id', db.getImageDimensions);
app.get('/api/image_assoc_names/:id', db.getImageAssocName);
app.get('/api/image_subject_search/:item', db.getImagesBySubject);
app.get('/api/image_subject_search_by_index/:item', db.getImagesBySubjectIndex);
app.get('/api/image_event_search/:item', db.getImagesByEvent);
app.get('/api/all_image_details/:id', db.getAllImageDetails);



module.exports = {
  app,
  server,
  closeConnection
} 