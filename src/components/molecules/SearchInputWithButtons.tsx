import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSearchProductByCategoryQuery } from '../../store/state/productApi';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../types';
import { InputField, SecondaryButton } from '../atoms';


export const SearchWithCart = () => {
    const [searchKey, setSearchKey] = useState<string>('');
    const {navigate} = useNavigation();

    const {refetch} = useSearchProductByCategoryQuery(searchKey);

    useEffect(() => {
      refetch();
    },[refetch, searchKey]);

  return (
   <View className="flex flex-row items-center justify-between h-[40px] border-dark-100 p-2 w-4/5">
       <InputField placeholder="Search by Category ex. jewelery" onTextChange={(value)=>setSearchKey(value)} />
       <View className="w-1/5 flex justify-center items-end">
        <SecondaryButton  onPress={()=>navigate(Screens.AddNewProduct as never)}/>
       </View>
    </View>
  );
}
