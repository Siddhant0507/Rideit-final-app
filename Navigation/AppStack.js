import { Settings, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import SettingsScreen from "../Screens/SettingsScreen/SettingsScreen";
import UserHistoryScreen from "../Screens/UserHistoryScreen/UserHistoryScreen";
import CustomDrawer from "../Components/CustomDrawer";
import IonIcons from "react-native-vector-icons/Ionicons";
import PickupDandT from "../Screens/PickupDandT/PDateAndTime";
import DropDandT from "../Screens/DropDandT/DropDandT";
import RideConfirmScreen from "../Screens/RideConfirmScreen/RideConfirmScreen";
import RideListScreen from "../Screens/RideListScreen";
import RideDetailScreen from "../Screens/RideDetailScreen.js";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack=()=>{
  return(
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home2" component={AppStack} options={{headerShown:false}} />
    <Stack.Screen name="PickupDandT" component={PickupDandT} />
    <Stack.Screen name="DropDandT" component={DropDandT} />
    <Stack.Screen name="RideConfirm" component={RideConfirmScreen} />
    <Stack.Screen name="RideListScreen" component={RideListScreen}/>
    <Stack.Screen name="RideDetailScreen" component={RideDetailScreen}/>
  </Stack.Navigator>




  )
}


const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{headerShown:false,
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor: "#fff",
        drawerLabelStyle: { marginLeft: -25, fontSize: 15 },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: (color) => (
            <IonIcons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="UserHistory"
        component={UserHistoryScreen}
        options={{
          drawerIcon: (color) => (
            <IonIcons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: (color) => (
            <IonIcons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator> // user Profile screen has to add in future0
  );
};

export default MainStack;
