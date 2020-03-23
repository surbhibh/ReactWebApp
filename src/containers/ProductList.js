import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../actions';
import { selectProducts } from '../selectors';
import ProductList from '../components/ProductList';

const mapStateToProps = state => ({
	products: selectProducts(state)
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(productActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
