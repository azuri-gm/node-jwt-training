const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const VehicleController = require('./controllers/auth.controller');
const app = express();

const devDBURL =
  'mongodb://user:user123@ds151943.mlab.com:51943/gbm-challenge-vehicle';
const mongoDB = devDBURL;

mongoose
  .connect(mongoDB)
  .then(() => console.log('Connection was successful'))
  .catch(err => console.log('There was an error connecting with the DB', err));

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('err', console.error.bind(console, 'MongoDB connection error: '));

app.use('/api/vehicle', VehicleController);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
