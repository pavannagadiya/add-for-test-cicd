import React, { Component } from "react";
import "./style.css";
import { fetchProducts } from "./actions/product";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    fetchProducts();
  }
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("state", state);
  return {
    prod: state.product.product
  };
}
export default connect(
  mapStateToProps,
  fetchProducts
)(App);
