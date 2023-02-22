const db = require('../db');

function getLastTwoDigitsOfYear() {
  let date = new Date();
  return date.getFullYear() % 2000;
}

module.exports = {
  getAllCustomers: (req, res) => {
    db.allCustomers().then((result) => {res.send(result)})
    .catch((err) => res.send(err));
  },
  editCustomer: (req, res) => {
    const _id = req.body._id.valueOf();
    delete req.body._id;
    db.editCustomer({ _id }, req.body)
      .then((result) => {
        res.send(result)
      })
      .catch(err => console.log(err));
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
  // if order is for editing, finds and edits the order matching object id
  // if order is new, creates the order. Uses two different functions from the db
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
          const year = getLastTwoDigitsOfYear();
          const orderId = `FM${year}-${result.seq_value}`;
          db.createOrder({...req.body, orderId})
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
    const { orderType } = req.params;
    db.findOrders({orderType})
      .then((result) => res.send(result))
      .catch(err => res.send(err))
  },
  getCustomerOrders: (req, res) => {
    const {firstName, lastName, page} = req.params;
    db.findCustomer({firstName, lastName})
      .then((result) => {
        if (result) {
          let customerId = result._id.valueOf();
          db.findOrders({ customerId }, page)
            .then(result => res.send(result))
        } else {
          res.send("customer not found")
        }
      })
  },
  getAllOrders: (req, res) => {
    db.findOrders()
      .then((result) => res.send(result))
      .catch(err => res.send(err))
  }
};