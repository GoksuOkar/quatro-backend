require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

const connectionString = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPSSWD}@quatro.sgb5fdh.mongodb.net/quatro?retryWrites=true&w=majority`

const db = mongoose.connect(connectionString);


const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/', routes);

app.set('port', port);
app.listen(port, () => console.log(`listening on port ${port}`));


module.exports = db;
