import React from 'react';
import { TouchableOpacity, Text, TouchableHighlight } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

interface Props {
  title?: string;
  onPress: () => void;
  icon?: string;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<Props> = ({ title, onPress, icon, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full bg-red-400 flex-row items-start justify-center"
      disabled={disabled}
    >
      {icon && <Icons name={icon} size={20} color="white" />}
      <Text className="text-white font-bold font-serif p-2 text-center">{title}</Text>
    </TouchableOpacity>
  );
};


export const SecondaryButton: React.FC<Props> = ({onPress, icon}) => {
    return <TouchableOpacity
        onPress={onPress}
        className=" p-1 bg-red-400 w-2/3 h-full items-center justify-center"
         >
        {icon && <Icons name="add" size={20} color="black" />}
        <Text className="text-white font-bold text-xm">Add</Text>
    </TouchableOpacity>;
};

export const SuccessButton: React.FC<Props> = ({onPress, title}) => {
    return <TouchableHighlight
            onPress={onPress}
            className="bg-green-600 p-2 w-1/2 items-center mt-4 rounded"
            >
            <Text className="font-semibold text-white">{title ?? 'Back'}</Text>
            </TouchableHighlight>;
};
