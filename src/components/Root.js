import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
// import ProductEdit from './ProductEdit';
import ProductEdit from '../containers/ProductEdit';

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<Route path='/edit' component={ProductEdit} exact />
			<Route path='/' component={App} exact />
		</Router>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired
};

export default Root;
