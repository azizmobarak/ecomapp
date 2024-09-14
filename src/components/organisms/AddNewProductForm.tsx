import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { addProduct } from '../../store/state/productState';
import { PrimaryButton } from '../atoms/Buttons';
import {InputField, Success, Loading} from '../atoms';
import { useAppDispatch } from '../../hooks/hooks';
import { Product } from '../../types/product';
import { StatusType } from '../../types/status';

export const AddNewProductForm = () => {
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [status, setStatus] = useState<StatusType>(StatusType.idle);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const onAddNewProduct = useCallback(() => {
      if (!title || !price) return;

  const newProduct: Product = {
    id: Date.now(),
    title,
    price: parseFloat(price) || 0,
    image: 'https://i.pravatar.cc',
    };

    setStatus(StatusType.loading);
    setIsButtonDisabled(true);
    try {
      dispatch(addProduct(newProduct));
      setStatus(StatusType.success);
    } catch (error) {
      setStatus(StatusType.error);
    } finally {
      setIsButtonDisabled(false);
      setTimeout(() => setStatus(StatusType.idle), 6000);
    }
  }, [title, price, dispatch]);

  if (status === StatusType.success) {
    return <Success title="Add New" message="Product Added Successfully" onHide={() => setStatus(StatusType.idle)} />;
  }

  if (status === StatusType.loading) {
    return <Loading />;
  }

  return (
    <View className="flex flex-col h-full w-full p-2 justify-start">
      <InputField
        label="Product Name"
        placeholder="ex. test product"
        onTextChange={setTitle}
        value={title}
      />
      <View className="mt-5" />
      <InputField
        label="Product Price ($)"
        placeholder="ex. 3000"
        onTextChange={setPrice}
        value={price}
        keyboardType="numeric"
      />
      <View className="mt-5" />
      <PrimaryButton
        title="Save New Product"
        onPress={onAddNewProduct}
        disabled={isButtonDisabled}
      />
    </View>
  );
}
