import React, { useState } from "react";
import Price from "./Price";
const Stock = () => {
  const [selectedStock, setSelectedStock] = useState("");
  const stocks = [
    { value: "AAPL", name: "Apple Inc." },
    { value: "GOOGL", name: "Alphabet Inc." },
    { value: "MSFT", name: "Microsoft Corporation" },
  ];

  const handleChange = (e) => {
    setSelectedStock(e.target.value);
  };
  return (
    <div>
      <label htmlFor="stockSelect">Select a stock:</label>
      <select
        id="stockSelect"
        value={selectedStock}
        onChange={handleChange}
      >
        <option value="">Select a stock</option>
        {stocks.map((stock) => (
          <option key={stock.value} value={stock.value}>
            {stock.value}
          </option>
        ))}
      </select>
      <Price selectedStock={selectedStock}/>
    </div>

  );
};

export default Stock;
