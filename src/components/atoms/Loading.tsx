import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const Loading = () => {
  return (
    <View className="flex w-full h-full justify-center items-center bg-red-100">
        <ActivityIndicator size={'large'} color={'#000'}/>
    </View>
  );
}
