import React, { useState } from "react";

function App() {
  // Separate state variables for each property
  const [name] = useState("Smartphone");
  const [price, setPrice] = useState(29999);
  const [brand] = useState("Realme");
  const [stock, setStock] = useState(10);

  const updateProduct = () => {
    setPrice(24999);
    setStock(15);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🛒 Product Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Stock:</strong> {stock}</p>

      <button onClick={updateProduct} style={{ padding: "8px 16px", marginTop: "10px" }}>
        Update Product
      </button>
    </div>
  );
}

export default App;