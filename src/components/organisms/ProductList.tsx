import React, { useCallback } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ProductCard from '../molecules/ProductCard';
import { useGetProductsListQuery } from '../../store/state/productApi';
import {RemoteData} from '../atoms';
import { useAppSelector } from '../../hooks/hooks';

export const ProductList = () => {
  const { isLoading, isError } = useGetProductsListQuery();
  const products = useAppSelector((state) => state.products.products);
  const isEmpty = products ? products.length === 0 : false;

  const colGap = styles.colGap;

  const separator = useCallback(() => <View style={styles.separator} />, []);

  const productList = useCallback(() => (
    <FlatList
      data={products ?? []}
      renderItem={({ item }) => <ProductCard {...item} />}
      keyExtractor={(item) => item.id.toString()}
      maxToRenderPerBatch={10}
      numColumns={2}
      columnWrapperStyle={colGap}
      ItemSeparatorComponent={separator}
      windowSize={5} 
      initialNumToRender={6}
      removeClippedSubviews={true}
      className="w-100 p-2 mb-20"
    />
  ), [products, colGap, separator]);

  return (
    <RemoteData isEmpty={isEmpty} isLoading={isLoading} isError={isError} component={productList()} />
  );
}

const styles = StyleSheet.create({
  colGap: {
    gap: 2,
  },
  separator: {
    marginTop: 5,
  },
});
