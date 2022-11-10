const router = require('express').Router();
const db = require('../db');
// const controller = require('../controllers');

router.get('/', (req, res) => {db.query('select * from orders').then((data) => res.send(data.rows))});

module.exports = router;