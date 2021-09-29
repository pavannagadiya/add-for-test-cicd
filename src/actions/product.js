import axios from "axios";

// get data too
export const PRODUCTS = "fetch_products";

export function fetchProducts() {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      dispatch({
        type: PRODUCTS,
        products: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
}
