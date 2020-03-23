import React from 'react';
import './App.css';

// import ProductList from './ProductList';
import ProductList from '../containers/ProductList';

function App() {
	return (
		<div className='product-list-container'>
			<h1 style={{color:"blue"}}>Products</h1>
			<ProductList />
		</div>
	);
}

export default App;
