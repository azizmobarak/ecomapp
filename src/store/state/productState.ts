import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ProductsApi } from './productApi';
import { Product } from '../../types';

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        product => product.id !== action.payload,
      );
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      ProductsApi.endpoints.getProductsList.matchFulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      },
    );
    builder.addMatcher(
      ProductsApi.endpoints.searchProductByCategory.matchFulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      },
    );
  },
});

export const {addProduct, removeProduct} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
