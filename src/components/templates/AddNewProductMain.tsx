import React from 'react'
import { View } from 'react-native'
import {AddNewProductForm} from '../organisms';

export const AddNewProductMain = () => {
  return (
    <View className="flex flex-col h-2/4 w-full p-1 justify-center">
        <AddNewProductForm/>
   </View>
  )
}
