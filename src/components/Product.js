import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
    </div>
  );
};

export default Product;
