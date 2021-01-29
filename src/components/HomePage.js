/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { loadProducts } from '../actions/products';
import ProductsList from './ProductsList';
import Header from './Header';
import Filters from './Filters';


const HomePage = (props) => {
  const [products, setProducts] = useState(props.products);
  const [sortOrder, setSortOrder] = useState('');
  const [filterStock, setFilterStock] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();

  // call api to get list of products
  useEffect(() => {
    setIsLoading(true);
    props.dispatch(loadProducts());

    // initialize debounce function to search once product has stopped typing every half second
    inputRef.current = _.debounce(onSearchText, 500);
  }, []);

  useEffect(() => {
    if (props.products.length > 0) {
      setProducts(props.products);
      setIsLoading(false);
    }
  }, [props.products]);

  function onSearchText(text, props) {
    let filtered;
    if (text) {
      filtered = props.products.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
      );
    } else {
      filtered = props.products;
    }
    setProducts(filtered);
    setSortOrder('');
    setFilterStock('');
  }

  function handleSearch(event) {
    inputRef.current(event.target.value, props);
  }

  function handleSort(sortOrder) {
    setSortOrder(sortOrder);
    if (sortOrder.value) {
      setProducts(_.orderBy(products, ['price'], [sortOrder.value]));
    }
  }

  function handleStock(filterStock) {
    setFilterStock(filterStock);
    if (filterStock.value) {
      setProducts(_.orderBy(products, ['inStock'], [filterStock.value]));
    }
  }

  return (
    <React.Fragment>
      <Header handleSearch={handleSearch} />
      <Filters handleSort={handleSort} sortOrder={sortOrder} handleStock={handleStock} filterStock={filterStock} />
      <ProductsList products={products} isLoading={isLoading} />
    </React.Fragment>
    
  );
};

const mapStateToProps = (state) => ({
  products: state.products
});

export default connect(mapStateToProps)(HomePage);
