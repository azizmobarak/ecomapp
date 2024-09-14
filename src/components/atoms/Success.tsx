import React from 'react';
import { Text, View } from 'react-native';
import { SuccessButton } from './Buttons';

type Props = {
    message: string;
    title: string;
    onHide: () => void;
}

export const Success: React.FC<Props> = ({message, title, onHide}) => {
  return (
    <View className="flex w-full h-full justify-center items-center bg-green-100">
        <Text className="text-2xl font-semi-bold">{message}</Text>
        <SuccessButton title={title} onPress={onHide} />
    </View>
  );
}
