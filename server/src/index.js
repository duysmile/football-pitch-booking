require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const fieldRoute = require('./routes/field.route');
const authRoute = require('./routes/auth.route');

const port = process.env.PORT || 3000;
const mongoConnection = process.env.MONGO_CONNECTION || 'mongodb://localhost:27017/test';

app.use(express.json());
app.use(cors({
  origin: '*',
}));
app.use(morgan('dev'));

app.use(fieldRoute);
app.use(authRoute);

app.use((err, req, res, next) => {
  console.error(err);
  const statusCode = res.status || 400;
  const message = res.message || 'Opps, something went wrong';
  return res.status(statusCode).json(message);
});

mongoose.connect(mongoConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(connection => {
  app.listen(port, () => {
    console.log('App listening on port', port);
  });
});
