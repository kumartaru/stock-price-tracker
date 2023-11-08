const express = require('express');
const apiRoutes = require('../mock-stock-api/route/api');
const app = express();
const cors=require('cors');
const mongoose = require('mongoose');
const port = 8080;
mongoose.connect('mongodb://localhost/stocktracker');
app.use(cors())
// Define a list of predefined stocks
app.use(apiRoutes);

// Start the Express server
app.listen(port, () => {
  console.log(`Mock Stock API server is running on port ${port}`);
});
