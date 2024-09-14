import React from 'react'
import { View, Text, Image } from 'react-native'

export const AddNewProductHeader = () => {
  return (
    <View className="h-2/4 flex items-center justify-center">
            <Text className="font-bold text-2xl h-1/5">Add new Product</Text>
           <Image className="w-auto h-4/5" source={require('../../assets/img/add-product.png')} />
   </View>
  )
}
