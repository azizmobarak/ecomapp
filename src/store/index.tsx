import { configureStore } from '@reduxjs/toolkit';
import { ProductsApi } from './state/productApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsReducer } from './state/productState';

const store = configureStore({
  reducer: {
    [ProductsApi.reducerPath]: ProductsApi.reducer,
    products: productsReducer,
   },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch);

export default store;
