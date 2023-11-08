import React, { useState, useEffect } from "react";
import axios from "axios";

const Price = ({ selectedStock }) => {
  const [price, setPrice] = useState(null);

  const fetchStockPrice = () => {
    axios
      .get(`http://localhost:8080/api/getRandomStockPrice?symbol=${selectedStock}`)
      .then((response) => {
        setPrice(response.data.price);
      })
      .catch((error) => {
        console.error("Error fetching stock price:", error);
      });
  };

  useEffect(() => {
    if (selectedStock) {
      fetchStockPrice();

      // Poll for stock price updates every minute
      const intervalId = setInterval(fetchStockPrice, 6000);

      // Clean up the interval when the component unmounts
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [selectedStock]);

  return (
    <div>
      {selectedStock ? (
        <div>
          <h2>Selected Stock: {selectedStock}</h2>
          <p>
            Current Price:{" "}
            {price !== null ? `$${price.toFixed(2)}` : "Loading..."}
          </p>
        </div>
      ) : (
        <p>Select a stock from the dropdown to view its price.</p>
      )}
    </div>
  );
};

export default Price;
