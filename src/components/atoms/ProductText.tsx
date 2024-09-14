import React from 'react';
import { Text, View } from 'react-native';

type Props = {
    title: string;
    price: number;
}

export const ProductText: React.FC<Props> = ({title, price}) => {
  return (
    <View className="flex w-full justify-space-around items-center">
        <Text numberOfLines={2} className="text-sm font-semibold text-red-500 text-dark-300 m-1 text-center">{title}</Text>
        <Text className="text-xl">{price} $</Text>
    </View>
  );
};
