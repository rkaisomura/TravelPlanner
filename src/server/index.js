// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser')

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));
const port = 8080;

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

// Spin up the server
// Callback to debug
const server = app.listen(port, ()=> {
    console.log(`Running on localhost: ${port}`);
})


// POST route
app.post('/travelinfo', (req, resp) => {
  projectData = {
    result: req.body.result,
    lat: req.body.lat,
    lng: req.body.lng,
    country: req.body.countryName,
    temp: req.body.temp,
    date: req.body.date,
    image: req.body.image,
  }
  console.log(projectData);
  resp.send(projectData);
})

// GET route which returns projectData
app.get('/travelinfo', function (req, resp) {   
  resp.send(projectData);
});