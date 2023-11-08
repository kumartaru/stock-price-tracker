
const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  currentPrice: {
    type: Number,
    default: 100.00, 
  },
});

module.exports = mongoose.model('Stock', stockSchema);
