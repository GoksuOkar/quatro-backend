const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

const port = 3000;

app.use(morgan('dev'));
app.use(express.json());

app.use('/', routes);

app.set('port', port);
app.listen(port, () => console.log(`listening on port ${port}`));



