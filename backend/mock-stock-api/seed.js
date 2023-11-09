// seed.js

const mongoose = require('mongoose');
const Stock = require('./models/stock'); // Import the Stock model
require('dotenv').config();
const dbUrl=process.env.DB_URL || 'mongodb://localhost:27017/stocktracker'
// Connect to MongoDB
mongoose.connect(dbUrl);


// Create a default stock entry

const predefinedStocks = [
  { symbol: 'AAPL', currentPrice: 150.25,name: "Apple Inc." },
  { symbol: 'GOOGL', currentPrice: 2800.50,name: "Google Inc." },
  { symbol: 'MSFT', currentPrice: 300.75,name: "Microsoft Corporation" },
  // Add more stocks as needed
];

// Save the default stock entry to the database
Stock.insertMany(predefinedStocks)
.then((stocks) => {
    console.log('Default stock entries have been created and saved:', stocks);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error creating and saving default stock entries:', error);
    mongoose.connection.close();
  });