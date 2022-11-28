import { StyleSheet, Text, View , TextInput, TouchableOpacity, Alert} from 'react-native'
import React ,{useState, useRef} from 'react';
import styles from './styles';
import { FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
import firebaseConfig from '../../firebaseConfig';
import firebase from 'firebase/compat/app';

const LoginScreen = ({navigation}) => {
 
  const [PhoneNumber , setPhoneNumber]= useState('');
  const [code  , setCode]= useState('');
  const [verificationId  , setVerificationId]= useState(null);
  const recaptchaVarifier= useRef(null);

  const sendVarification =() =>{
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider.verifyPhoneNumber(PhoneNumber,recaptchaVarifier.current)
    .then(setVerificationId);
    setPhoneNumber('');
  }

  const confirmCode =() =>{
     const credentials = firebase.auth.PhoneAuthProvider.credential(
      verificationId , code
     );
     firebase.auth().signInWithCredential(credentials).then(()=>{
      setCode('');
     }).catch((error)=>{
      alert(error);
     })
     Alert.alert("Login successful .Welcome to dashboard",);
     navigation.navigate('Home3')
  }

 
  return (
    <View style={styles.container}>
      
      <FirebaseRecaptchaVerifierModal 
      ref={recaptchaVarifier}
      firebaseConfig={firebaseConfig}/>

      <Text style={styles.headingText}>
        Enter Phone Number for varification
      </Text>

      <Text style={styles.subHeadingText}>
        This number will be used for all ride-related communication. You shall
        receive an SMS with code for varification.
      </Text>

      <Text style={styles.subHeadingText}>Note : Start number with +91</Text>
     <View style={styles.inputView}>
      
      <TextInput
        placeholder="Enter Phone Number"
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        autoCompleteType="tel"
        style={styles.loginInput}
      /></View>

      <TouchableOpacity style={styles.button} onPress={sendVarification}>
        <Text style={styles.buttonText}> Send Otp</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Enter Phone Number"
        onChangeText={setCode}
        keyboardType="phone-pad"
        autoCompleteType="tel"
        style={styles.loginInput}
      />

<TouchableOpacity style={styles.button} onPress={confirmCode}>
        <Text style={styles.buttonText}> confirm Otp</Text>
        </TouchableOpacity>
      </View>
  )
}

export default LoginScreen
