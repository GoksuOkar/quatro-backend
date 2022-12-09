const router = require('express').Router();
const Schemas = require('../db');
const mongoose = require('mongoose');
const controller = require('../controllers');

router.post('/customers', (req, res) => {
  controller.createCustomer(req.body).then((result) => {
    res.send(result);
  })
});

router.get('/customers/:firstName-:lastName', (req, res) => {
  const nameObj = req.params;
  controller.getCustomerByName(nameObj).then((result) =>{
    if (result) {
      res.send(result);
    } else {
      res.send(false);
    }
  })
});

router.post('/orders', (req, res) => {
  //req body should have all the fields
  controller.getSequence().then((result) => {
    const orderId = result.seq_value;
    controller.createOrder({... req.body, orderId })
      .then((newResult) => {
        console.log(newResult);
        res.send(newResult)
      })
  })
});

router.get('/orders/:customerId', (req, res) => {
  controller.getOrderByCustomerId(req.params.customerId)
  .then((result) => res.send(result));
})

module.exports = router;