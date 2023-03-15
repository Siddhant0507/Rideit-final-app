import { GestureHandlerRootView } from "react-native-gesture-handler"; // added because an error causing due to the reanimated packeage
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {StripeProvider} from '@stripe/stripe-react-native'



import { Provider } from "react-redux";

import AuthStack from "./Navigation/AuthStack";
import AppStack from "./Navigation/AppStack";

import { store } from "./store";



export default function App() {
  return (
    <StripeProvider
    publishableKey='pk_test_51M8zwoSHh4iApiO5TmkuRAYiZwG0qwAK79y2fYXzB7SOIMA1mESdMFNePtmbQAzBeox9PFvlb1sDnt3Rt0TV8Hzx00PCUl0P0X'
   
  >
    <Provider store={store}>
        <NavigationContainer>
          <AuthStack />
          {/* <AppStack/> */}
        </NavigationContainer>
    </Provider>
    </StripeProvider>
  );
}
