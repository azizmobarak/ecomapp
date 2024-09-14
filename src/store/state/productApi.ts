import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../../utils/constants';
import {Product} from '../../types';

export const ProductsApi = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: headers => {
      headers.set('Content-Type', 'application/json');

      return headers;
    },
  }),
  endpoints: builder => ({
    getProductsList: builder.query<Product[], void>({
      query: () => '/',
    }),
    searchProductByCategory: builder.query<Product[], string>({
      query: category => {
        if (category) {
          return `/category/${category}`;
        }
        return '/';
      },
    }),
    addNewProduct: builder.mutation<void, Partial<Product>>({
      query: newProduct => ({
        url: '/',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body:{
          ...newProduct,
          description: 'lorem ipsum set',
          image: 'https://i.pravatar.cc',
          category: 'electronic',
        },
      }),
    }),
  }),
});

export const {
  useGetProductsListQuery,
  useSearchProductByCategoryQuery,
  useAddNewProductMutation,
} = ProductsApi;
