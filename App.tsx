import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/components/Navigation/Navigation';

export default function App() {

  return (
    <>
      <StatusBar hidden={true} />
      <Navigation />
    </>
  );
}
