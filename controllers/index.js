const Schemas = require('../db');

module.exports = {
  getCustomerByName: (nameObj) => (
    Schemas.Customer.findOne(nameObj)
  ),
  createCustomer: (customerInfo) => (
    Schemas.Customer.create(customerInfo)
  )
}