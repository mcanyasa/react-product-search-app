import React from 'react';
import ProductItem from './ProductItem';

const ProductsList = ({ products, isLoading }) => {
  return (
    <div className="products-list">
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          {products.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </React.Fragment>
      )}
    </div>
  );
};

export default ProductsList;
