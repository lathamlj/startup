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
  // Implementation to retrieve and send observations
  // For now, let's send a placeholder response
  res.json({ observations: [] });
});

// Save Observation
apiRouter.post('/observations', (req, res) => {
  // Implementation to save a new observation
  // For now, let's send a placeholder response
  res.json({ message: 'Observation saved successfully!' });
});

// Get User Name
apiRouter.get('/username', (_req, res) => {
  // Implementation to retrieve and send the user's name
  // For now, let's send a placeholder response
  res.json({ username: 'Mystery user' });
});

// Save User Name
apiRouter.post('/username', (req, res) => {
  // Implementation to save or update the user's name
  // For now, let's send a placeholder response
  res.json({ message: 'Username saved successfully!' });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
