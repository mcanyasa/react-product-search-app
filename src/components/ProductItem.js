import React from 'react';
import { Card } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const ProductItem = ({ image, name, productId, priceText,oldPriceText,brand,inStock }) => {
  if(inStock === false){
    inStock = "Out Of Stock"
  }else{
    inStock = "In Stock"
  }
  return (
    
    <Card className="product">
      <Card.Img variant="top" src={image} className="product__image" alt={name} />
      <Card.Body>
        <Card.Title className="product__name">{name}</Card.Title>
        <Card.Text className="product__details">
        <span className="details">
          <span>
            <strong>ProductId:</strong> {productId}
          </span>
          <span>
            <strong>Brand:</strong> {brand}
          </span>
          <span className="oldPrice">
            <strong >Old Price:</strong> {oldPriceText}
          </span>
          <span>
            <strong>Price:</strong> {priceText}
          </span>
          <span>
            <strong>Stock:</strong> {inStock}
          </span>
          </span>
          <span className="more">
            <strong>more...</strong> 
          
          </span>
        </Card.Text>
      </Card.Body>
    </Card>

    
  );
};

export default ProductItem;
