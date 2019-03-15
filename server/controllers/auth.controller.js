const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bodyParser = require('body-parser');
const Vehicle = require('../models/vehicle.model');

router.use(bodyParser.json());

router.post('/createTrip', (req, res) => {
  const { userId, userName, location } = req.body;
  Vehicle.create(
    {
      userId: userId,
      userName: userName,
      location: location,
      previousLocation: { type: 'Point', coordinates: [location] }
    },
    (err, user) => {
      if (err) return res.status(500).send('There was an error, try again');
      res.status(201).send({ user });
    }
  );
});

module.exports = router;
