const express = require('express');
const route = express.Router();

const sitesController = require('../app/controllers/SitesController.js');

route.use('/home', sitesController.home);
route.use('/search', sitesController.search);

module.exports = route;
