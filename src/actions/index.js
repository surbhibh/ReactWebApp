import * as types from '../constants/actionTypes';

// export const loadProducts = () => ({ type: types.LOAD_PRODUCTS });
export const selectEditProduct = productName => ({ type: types.SELECT_EDIT_PRODUCT, productName });
export const saveProduct = product => ({ type: types.SAVE_PRODUCT, product });
