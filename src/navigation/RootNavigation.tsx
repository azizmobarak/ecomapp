import * as React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import HomeScreen from '../components/pages/Home';
import { Screens } from '../types';
import AddNewProduct from '../components/pages/AddNewProduct';

type RootNavigationNative = {
  [Screens.Home]: NavigatorScreenParams<undefined>;
  [Screens.AddNewProduct]: NavigatorScreenParams<undefined>;
};

const RootStackNavigation = createNativeStackNavigator<RootNavigationNative>();

export default function RootNavigation(): React.ReactElement {
  const { Screen, Navigator } = RootStackNavigation;
  return (
    <Navigator>
      <Screen
      options={{
        headerShown: true,
        title: 'Welcome to EcomApp'
      }}
      name={Screens.Home} component={HomeScreen} />
      <Screen
      options={{
        headerShown: true,
        title: 'Add new Product'
      }}
      name={Screens.AddNewProduct} component={AddNewProduct} />
    </Navigator>
  );
}