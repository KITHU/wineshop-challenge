import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts, add_to_cart } from "../redux/actions";
import Products from "./Products";

class Wrapperr extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  showDetails = (detail) => {
    alert(detail);
  };
  additems = (id,bcase,bottle)=>{
    this.props.add_to_cart(id, bcase,bottle)
  }
  render() {
    let url = "https://storage.googleapis.com/wineshop-assets/wine-bottles/";
    const product = this.props.products.map((obj) => (
      <Products
        key={obj.no}
        no={obj.no}
        name={obj.name}
        bottle={obj.cost.bottle}
        case={obj.cost.case}
        image={url + obj.image}
        details = {obj.details}
        getdetails={this.showDetails}
        additemstocart={this.additems}
      />
    ));
    return <div className="flex_container">{product}</div>;
  }
}
const mapStateToProps = (state) => {
  console.log(state.products);
  return { products: state.products};
};
export default connect(mapStateToProps, { fetchProducts, add_to_cart })(Wrapperr);
