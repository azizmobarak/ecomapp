import React, { memo } from 'react';
import { View, Image } from 'react-native';
import { useAppDispatch } from '../../hooks/hooks';
import { removeProduct } from '../../store/state/productState';
import { Product } from '../../types/product';
import { PrimaryButton, ProductText } from '../atoms';

const ProductCard = memo(function ProductCard(props: Product) {
  const dispatch = useAppDispatch();

  const handleDeleteProduct = () => {
    dispatch(removeProduct(props.id));
  };

  return (
    <View className="w-1/2 max-h-[250px] h-full border-2 border-red-200 rounded-md items-center justify-between">
      <Image className="m-2" source={{ uri: props.image }} width={100} height={100} />
      <ProductText {...props} />
      <PrimaryButton title="Delete Product" onPress={handleDeleteProduct} />
    </View>
  );
});

export default ProductCard;
