import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class ProductItem extends Component {
  static propTypes = {
    product: PropTypes.object
  };

  componentWillMount() {
    const { name } = this.props.location;
    this.props.actions.selectEditProduct(name);
    console.log("ProductItem -> componentDidMount -> this.props", this.props);
  }

  ShowProduct(product) {
    if (product !== null && product.name) {
      console.log("ProductItem -> ShowProduct -> product", product);
      return (
        <table>
          <thead>
            <tr>
              <th>FieldName</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{product.name}</td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>{product.weight}</td>
            </tr>
            <tr>
              <th>Availability</th>
              <td>{product.availability}</td>
            </tr>
            <tr>
              <th>Product URL</th>
              <td>{product.productUrl}</td>
            </tr>
            <tr>
              <th>Price tier</th>
              <td>
                <div class="radio">
                  <label>
                    <input type="radio" value="budget" />
                    budget
                  </label>
                  <label>
                    <input type="radio" value="premier" />
                    premier
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <th> Price Range</th>
              <td>{product.priceRange}</td>
            </tr>
            <tr>
              <th>Is Editable</th>
              <td>{product.isEditable}</td>
            </tr>
            <tr>
              <td>
                <Link to={{ pathname: "/" }}>
                  <button>Submit</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      );
    } else {
      return <h3>No Products found</h3>;
    }
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <h1>Product Edit</h1>
        {this.ShowProduct(product)}
      </div>
    );
  }
}
