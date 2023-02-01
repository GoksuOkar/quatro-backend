const router = require('express').Router();
const Schemas = require('../db');
const mongoose = require('mongoose');
const controller = require('../controllers');

router.post('/customers', controller.createCustomer);

router.post('/customer', controller.editCustomer);

router.get('/customers', controller.getAllCustomers);

router.get('/customers/:firstName-:lastName', controller.getCustomerByName);

router.get('/customers/id/:_id', controller.getCustomerById);

router.post('/orders', controller.createOrEditOrder);

router.get('/orders', controller.getAllOrders);

router.get('/orders/:orderType', controller.getOrdersByType);

module.exports = router;