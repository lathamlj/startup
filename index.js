const express = require('express');
const app = express();
const DB = require('./database.js');

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
apiRouter.get('/observations', async (_req, res) => {
    const observations = await DB.getObservations();
    res.send(observations);
});

// Save Observation
apiRouter.post('/observations', async (req, res) => {
    console.log('test');
    DB.saveObservation(req.body);
    const observations = await DB.getObservations();
    res.send(observations);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    
    console.log(`Listening on port ${port}`);
});