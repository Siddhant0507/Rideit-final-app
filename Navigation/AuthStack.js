
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import FirstScreen from '../Screens/FirstScreen/FirstScreen';
import SignupScreen from '../Screens/SignupScreen/SignupScreen';
import AppStack from './AppStack'


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
         <Stack.Screen name="First" component={FirstScreen} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}  />
      <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}} />
      <Stack.Screen name="Home3" component={AppStack} />
    </Stack.Navigator>
  )
}

export default AuthStack
