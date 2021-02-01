const express = require('express');
const process = require('process');
const { join } = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressStaticGzip = require('express-static-gzip');

const Review = require('./db/Review.js');
// import {mkUUID}
const {reviewsHandler} = require('./endpoints');


// eslint-disable-next-line @babel/new-cap
const app = new express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
  console.log(req.method);
  next();
});

// app.use(express.static(join(__dirname, '..', 'client')));
app.use('/', expressStaticGzip(join(__dirname, '..', 'client'), {
  enableBrotli: true,
  orderPreference: ['br', 'gz']
}));

let log = (data) => {
  console.log(data);
  return data;
};

app.get('/reviews', reviewsHandler);

app.listen(PORT);
console.log(`listening on ${PORT}`);
