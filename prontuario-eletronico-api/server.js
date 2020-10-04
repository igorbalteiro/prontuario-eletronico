/* eslint-disable no-undef */
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const swaggerDocument = require('./swagger.json');
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to prontuario eletronico API.' });
});

require('./src/routes/patients.routes')(app);
require('./src/routes/schedules.routes')(app);

// set port, listen for requests
const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});