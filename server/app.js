const express = require('express');
const morgan = require('morgan');
// const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
const trips = require('./routes/trips');

const { notFound, errorHandler } = require('./middleware/errorHandler');

const corsOpts = {
  origin: '*',

  methods: ['GET', 'POST'],

  allowedHeaders: ['Content-Type'],
};

require('colors');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));

// app.use(helmet());

app.use(cors(corsOpts));

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json());

app.use('/', trips);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT ?? 5000;

app.listen(PORT);
