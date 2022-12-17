const router = require('express').Router();
const Schemas = require('../db');
const mongoose = require('mongoose');
const controller = require('../controllers');

router.post('/customers', controller.createCustomer);

router.get('/customers/:firstName-:lastName', controller.getCustomerByName);

router.get('/customers/id/:_id', controller.getCustomerById);

router.post('/orders', controller.createOrder);

router.get('/orders/:orderType', controller.getOrdersByType);

router.get('/:firstName-:lastName/orders', controller.getCustomerOrders);

module.exports = router;