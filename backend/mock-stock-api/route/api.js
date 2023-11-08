// routes/api.js

const express = require('express');
const router = express.Router();
const Stock = require('../models/stock');

// Route to get a random stock price by symbol
router.get('/api/getRandomStockPrice', async (req, res) => {
  const { symbol } = req.query;

  try {
    // Find the stock with the specified symbol in the database
    const selectedStock = await Stock.findOne({ symbol });

    if (!selectedStock) {
      return res.status(404).json({ error: 'Stock not found' });
    }

    // Generate a random price within a range (e.g., +/- 5% of the current price)
    const minPrice = selectedStock.currentPrice * 0.95;
    const maxPrice = selectedStock.currentPrice * 1.05;
    const randomPrice = (Math.random() * (maxPrice - minPrice)) + minPrice;

    // Update the current price in the database
    selectedStock.currentPrice = randomPrice;
    await selectedStock.save();

    // Return the updated random price
    res.json({ symbol: selectedStock.symbol, price: randomPrice });
  } catch (error) {
    console.error('Error fetching or updating stock price:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
