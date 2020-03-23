import { LOAD_PRODUCTS, SELECT_EDIT_PRODUCT, SAVE_PRODUCT } from '../constants/actionTypes';
import { products } from '../products';
const initialState = { products: [...products], editingProduct: null };

export default function productRx(state = initialState, action) {
	switch (action.type) {
		case SELECT_EDIT_PRODUCT:
			return {
				...state,
				editingProduct: state.products.reduce((acc, curr) => {
					if (curr.name === action.productName) {
						acc = { ...curr };
					}
					return acc;
				}, {})
			};
		case SAVE_PRODUCT:
			return {
				...state,
				editingProduct: null,
				products: state.products.map(curr => {
					if (curr.name === action.product.name) {
						curr = { ...action.product };
					}
					return { ...curr };
				})
			};
		default:
			return initialState;
	}
}
