import React from 'react';
import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native';

type Props = {
    placeholder: string;
    label?: string;
    onTextChange: (e: string) => void;
    value?: string;
    keyboardType?: KeyboardTypeOptions;
}

export const InputField: React.FC<Props> = ({placeholder, label, onTextChange, value, keyboardType}) => {
   return (
    <View className="w-100 flex flex-col w-full">
        {label && <Text>{label}</Text>}
        <TextInput
        onChangeText={onTextChange}
         placeholder={placeholder}
         className="min-h-[30px] border-2 border-red-200 rounded p-2 w-full"
         value={value}
         keyboardType={keyboardType}
        />
    </View>
   );
};
