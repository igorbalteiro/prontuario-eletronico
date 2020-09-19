/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const patients = require('./src/routes/patients.routes');
const schedules = require('./src/routes/schedules.routes');

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to prontuario eletronico API.' });
});

app.use('/api/v1/patients', patients);
app.use('/api/v1/schedules', schedules);

// set port, listen for requests
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT}.`);
});