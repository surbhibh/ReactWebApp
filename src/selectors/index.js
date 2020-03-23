import { createSelector } from 'reselect';

const productRx = state => state.productRx;

export const selectProducts = createSelector([productRx], productState => {
	return productState.products;
});

export const getSelectedProduct = createSelector([productRx], productState => productState.editingProduct);
