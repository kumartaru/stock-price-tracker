const express = require('express');
require('dotenv').config();
const apiRoutes = require('../mock-stock-api/route/api');
const app = express();
const cors=require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT||8080;
const dbUrl=process.env.DB_URL || 'mongodb://localhost:27017/stocktracker'
mongoose.connect(dbUrl);
app.use(cors())
// Define a list of predefined stocks
app.use(apiRoutes);

// Start the Express server
app.listen(port, () => {
  console.log(`Mock Stock API server is running on port ${port}`);
});
