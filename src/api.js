const express = require('express');

const serverless = require('serverless-http');

const app = express();

const router = express.Router();

router.get('/createFactory', (req, res) => {


  res.json({

    'FactoryAddress': '',
    'INIT_CODE': ''

  });


});

router.get('/createRouter', (req, res) => {


  res.json({

    'RouterAddress': ''

  });


});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);