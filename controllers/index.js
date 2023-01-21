const db = require('../db');

module.exports = {
  getAllCustomers: (req, res) => {
    db.allCustomers().then((result) => {res.send(result)})
    .catch((err) => res.send(err));
  },
  editCustomer: (req, res) => {
    const newInfo = req.body;
    db.updateCustomer(newInfo).then((result) => {
      res.send(result)
    }).catch(err => res.send(err))
  },
  getCustomerByName: (req, res) => {
    const nameObj = req.params;
    let { firstName, lastName } = nameObj;
    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();
    db.findCustomer({firstName, lastName})
      .then((result) => {
        if (result) {
          res.send(result);
        } else {
          res.send(false);
        }
      })
  },
  getCustomerById: (req, res) => {
    db.findCustomer(req.params)
      .then((result) => {
        res.send(result)
      })
      .catch((err) => res.send(err))
  },
  createCustomer: (req, res) =>
  {
    db.createCustomer(req.body)
      .then((result) => {
        res.send(result)
      })
      .catch((err) => res.send(err))
  },
  getOrderByCustomerId: (req, res) => {
    let { customerId } = req.params;
    db.findOrders({ customerId })
      .then((result) => res.send(result))
      .catch(err => res.send(err))
  },
  createOrEditOrder: (req, res) => {
    if (req.body.orderId) {
      const _id = req.body._id.valueOf();
      delete req.body._id;
      db.editOrder({ _id }, req.body)
        .then((result) => {
          res.send(result)
        })
        .catch(err => console.log(err));
    } else {
      db.incrementSequence()
        .then((result) => {
          const orderId = result.seq_value;
          db.createOrder({orderId}, {...req.body, orderId})
            .then((newResult) => {
              res.send(newResult)
            })
            .catch((err) => {
              db.decrementSequence();
              console.log(err);
            })
        })
    }
  },
  getOrdersByType: (req, res) => {
    db.findOrders(req.params)
      .then((result) => res.send(result))
      .catch(err => res.send(err))
  },
  getCustomerOrders: (req, res) => {
    db.findCustomer(req.params)
      .then((result) => {
        if (result) {
          let customerId = result._id.valueOf();
          db.findOrders({ customerId })
            .then(result => res.send(result))
        } else {
          res.send("customer not found")
        }
      })
  }
};