import React from 'react';
import { View } from 'react-native';
import {ProductList} from '../organisms';
import {SearchWithCart} from '../molecules';


export const ProductListTemplate = () => {
  return (
    <View className="flex flex-col w-full h-full">
    <View className="h-1/7">
      <SearchWithCart/>
    </View>
    <View className="flex w-full h-5/7 justify-center items-center">
     <ProductList/>
    </View>
   </View>
  );
}
