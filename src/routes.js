const express = require('express');
const ClientController = require('./controllers/ClientController');
const EmailController = require('./controllers/EmailController');
const routes = express.Router();

routes.get('/users', ClientController.index);
routes.post('/users', ClientController.create);
routes.post('/emails', EmailController.enviaMail);

module.exports = routes;