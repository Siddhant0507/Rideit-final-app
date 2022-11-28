
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { AsyncStorage } from '@react-native-community/async-storage';

import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import FirstScreen from '../Screens/FirstScreen/FirstScreen';
import SignupScreen from '../Screens/SignupScreen/SignupScreen';
import AppStack from './AppStack'
import OnboardingScreen from '../Screens/Onboarding/OnboardingScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown:false}} />
      <Stack.Screen name="First" component={FirstScreen} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}  />
      <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}} />
      <Stack.Screen name="Home3" component={AppStack} />
    </Stack.Navigator>
  )
}

export default AuthStack




// const [isFirstLaunch, setIsFirstLaunch]= React.useState(null)

// useEffect(()=>{
//   AsyncStorage.getItem('alreadyLaunch').then(value =>{
//     if(value==null){
//       AsyncStorage.setItem('alreadyLaunch','true');
//       setIsFirstLaunch(true)
//     }else{
//       setIsFirstLaunch(false)
//     }
//   })
// },[]);


// if(isFirstLaunch === null){
// return null;
// }else if(isFirstLaunch===true){
// return(
// <Stack.Navigator>
//   <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown:false}} />
//   <Stack.Screen name="First" component={FirstScreen} options={{headerShown:false}} />
//   <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}  />
//   <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}} />
//   <Stack.Screen name="Home3" component={AppStack} />
// </Stack.Navigator>

// )
// }else{
//  return <FirstScreen />
// }