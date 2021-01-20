import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
