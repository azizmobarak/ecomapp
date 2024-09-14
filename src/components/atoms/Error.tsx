import React from 'react';
import { Text, View } from 'react-native';

export const Error = () => {
  return (
    <View className="flex w-full h-full justify-center items-center bg-red-100">
        <Text className="text-xl font-semi-bold">Ooops something happen please try again!</Text>
    </View>
  );
}
