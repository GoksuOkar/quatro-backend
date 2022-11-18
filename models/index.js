const db = require('../db');

module.exports = {
  addNewOrder: function(cols, vals) {
    // params will be an array of params returned from the form
    return db.query(
      `INSERT INTO orders (${cols.join()})
      VALUES (${vals.join()})`
      )
  },

  updateOrder: function(ordNum, str) {
    return db.query(
      `UPDATE orders SET ${str} WHERE oderNum = ${ordNum}`
    )
  },

  updateStatus: function(ordNum) {
    // todo
    return;
  }
}