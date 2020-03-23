import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../actions';
import { getSelectedProduct } from '../selectors';
import ProductEdit from '../components/ProductEdit';

const mapStateToProps = (state, ownProps) => ({
	product: getSelectedProduct(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	actions: bindActionCreators(productActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);
