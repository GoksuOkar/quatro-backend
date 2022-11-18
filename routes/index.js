const router = require('express').Router();
const controller = require('../controllers');
const db = require('../dbSQL');
// const controller = require('../controllers');

const params = ["firstName", "lastName", "current", "orderType", "phone", "email", "address", "weight", "height", "level", "style", "tail", "construction", "boardColor", "finSetup"];

router.get('/', (req, res) => {
  // req will carry an object, keys for columns, values for the values
  // obj keys and join
  // obj values and join
  // db.query(
  //   `INSERT INTO orders (${params.join()})
  //   VALUES ('jane', 'okar', 'false', 'walkin', '8083854668', 'goksu@gmail.com', '284 Ikalani Pl. Makawao, Hawaii, 96768', '145', '5.7', 'advanced', 'asymmetrical', 'swallow', 'carbon', 'pink', 'quad')`
  //   )
    console.log('here');
    db.query(
      `select * from orders`
    ).then((data) => res.send(data.rows))
});

router.post('/create-order', )

module.exports = router;