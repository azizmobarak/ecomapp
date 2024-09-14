import React from 'react';
import { View } from 'react-native';
import { AddNewProductMain } from '../templates';
import {AddNewProductHeader} from '../templates';

export default function AddNewProduct() {

  return (
    <View className="flex flex-col h-full w-full p-2 items-center">
       <AddNewProductHeader/>
       <AddNewProductMain/>
    </View>
  );
}
