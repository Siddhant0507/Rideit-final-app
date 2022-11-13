import { GestureHandlerRootView } from 'react-native-gesture-handler';   // added because an error causing due to the reanimated packeage 
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AuthStack from './Navigation/AuthStack';
import AppStack from './Navigation/AppStack';



export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>      
    <NavigationContainer>
    {/* <AuthStack/> */}
    <AppStack/>
  </NavigationContainer>
  </GestureHandlerRootView>    //  done because of an error causing in reanimated package
  );
}


