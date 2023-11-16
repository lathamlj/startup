const express = require('express');
const app = express();

// The service port. In production, the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Get Observations
apiRouter.get('/observations', (_req, res) => {
  res.send(observations);
  //res.json({ observations: [] });
});

// Save Observation
apiRouter.post('/observations', (req, res) => {
  // save observation in database?
  observations = saveObservation(req.body, observations);
  res.send(observations)
  //res.json({ message: 'Observation saved successfully!' });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

let observations = [];
function saveObservation(newObservation, observations) {
    observations.push({ observation: newObservation});
    return observations;
}