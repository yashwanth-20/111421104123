import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock API call
    const fetchProducts = async () => {
      const response = await fetch('https://api.example.com/products/top');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Top N Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
