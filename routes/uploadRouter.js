const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('../authenticate')
const multer =require('multer')


const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')