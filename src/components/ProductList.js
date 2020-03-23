import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

export default class ProductList extends Component {
	static propTypes = {
		products: PropTypes.any,
		actions: PropTypes.object.isRequired
	};

	render() {
		return (
			<table>
				<thead>
					<th>Name</th>
					<th>Weight</th>
					<th>Availability</th>
					<th>Modifications</th>
				</thead>
				<tbody>
					{this.props.products.map(prod => (
						<ProductItem key={prod.name} item={prod} {...this.props.actions} />
					))}
				</tbody>
			</table>
		);
	}
}
