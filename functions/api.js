const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const physioblogs = require('../db/physioblogs.json');
const faqs = require('../db/faqs.json');

let records = [];

//Get all students
router.get('/', (req, res) => {
  res.send('App is running..');
});

//Create new record
// router.post('/add', (req, res) => {
//   res.send('New record added.');
// });

//delete existing record
// router.delete('/', (req, res) => {
//   res.send('Deleted existing record');
// });

//updating existing record
// router.put('/', (req, res) => {
//   res.send('Updating existing record');
// });

//showing physioblogs records
router.get('/physioblogs', (req, res) => {
  res.json(physioblogs);
});

//showing faqs records
router.get('/faqs', (req, res) => {
  res.json(faqs);
});


app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);

