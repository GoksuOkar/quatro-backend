const Schemas = require('../db');

module.exports = {
  getCustomerByName: (nameObj) => {
    let { firstName, lastName } = nameObj;
    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();
    return Schemas.Customer.findOne({ firstName, lastName })
  },
  createCustomer: (customerInfo) => (
    Schemas.Customer.create(customerInfo)
  ),
  getOrderByCustomerId: (customerId) => (
    Schemas.Order.find({ cutomerId })
  ),
  createOrder: (orderInfo) => (
    Schemas.Order.create(orderInfo)
  ),
  getOrderById: (_id) => (
    Schemas.Order.findOne({ _id })
  )
};