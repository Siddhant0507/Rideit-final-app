import { GestureHandlerRootView } from "react-native-gesture-handler"; // added because an error causing due to the reanimated packeage
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



import { Provider } from "react-redux";

import AuthStack from "./Navigation/AuthStack";
import AppStack from "./Navigation/AppStack";

import { store } from "./store";



export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          {/* <AuthStack /> */}
          <AppStack/>
        </NavigationContainer>
    </Provider>
  );
}
