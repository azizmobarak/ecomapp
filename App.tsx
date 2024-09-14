import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';
import { Provider } from 'react-redux';
import store from './src/store';


function App(): React.JSX.Element {

  return (
    <View
    className="flex-row h-full w-full bg-red-100 justify-center items-center"
    >
     <StatusBar
      backgroundColor={'#fff4'}
      barStyle={'default'}
    />
      <Provider store={store}>
      <NavigationContainer>
        <RootNavigation/>
      </NavigationContainer>
      </Provider>
    </View>
  );
}

export default App;
