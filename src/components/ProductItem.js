import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class ProductItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;
    return (
        <tr>
          <td>{item.name}</td>
          <td>{item.weight}</td>
          <td>{item.availability}</td>
          <td>
            <Link to={{ pathname: "/edit", name: item.name }}>
              <button>Edit</button>
            </Link>
          </td>
        </tr>
    );
  }
}
