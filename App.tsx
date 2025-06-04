/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/StackNavigator';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { navigationRef } from './src/navigation/NavigationService';

function App(): React.JSX.Element {
  return (
    <NavigationContainer
      ref={navigationRef}
    >
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
