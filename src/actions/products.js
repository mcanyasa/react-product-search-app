import axios from 'axios';

export const loadProducts = () => {
  return async (dispatch) => {
    try {
      const products = await axios.get('./products.json');
      return dispatch(setProducts(products.data));
    } catch (error) {
      console.log('error:', error);
    }
  };
};

export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  products
});
