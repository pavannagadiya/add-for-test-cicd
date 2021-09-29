import { PRODUCTS } from "../actions/product";
const INITIAL_STATE = {
  product: []
};

export default (state, action) => {
  // set default values
  if (state == null) {
    return {
      product: []
    };
  }
  // actions
  console.log("action", action.type);
  console.log("action", action.payload);
  console.log("action", action);
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        product: action.payload.products
      };
  }
};
