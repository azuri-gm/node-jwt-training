const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const vehicleSchema = new Schema({
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  location: { type: pointSchema, required: true },
  previousLocation: { type: Array }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
