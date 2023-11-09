
const Sentry = require('@sentry/node');
const { ProfilingIntegration } = require('@sentry/profiling-node');
const path = require('path');
const db = require('./connect')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

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

// Allow app to server static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// The error handler must be registered before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// database connection tests
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)

const connection = db.connectToDB


app.listen(port, () => {
  console.log(`BPI express app listening on port ${port}`)
})

// test function to check if sentry works
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

module.exports = app;