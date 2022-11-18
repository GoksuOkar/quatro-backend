const model = require('../models');

module.exports = {
  createOrder: function(req, res) {
    const cols = Object.keys(req.body);
    const vals = Object.values(req.body);
    model.addNewOrder(cols, vals);
  }
}