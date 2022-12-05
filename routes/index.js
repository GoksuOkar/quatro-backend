const router = require('express').Router();
const Schemas = require('../db');
const mongoose = require('mongoose');
const controller = require('../controllers');

router.post('/customers', (req, res) => {
  controller.createCustomer(req.body).then((result) => {
    res.send(result);
  })
});

router.get('/customers', (req, res) => {
  const nameObj = req.data;
  controller.getCustomerByName(nameObj).then((result) =>{
    if (result) {
      res.send(result);
    } else {
      res.send(false);
    }
  })
});

router.post('/new-order', (req, res) => {
  //req body should have all the fields
  let order = new Schemas.Order(req.body);
  order
    .save()
    .then((result) => res.send('posted'));
});

router.get('/new-order', (req, res) => {
  res.send('here');
})

module.exports = router;