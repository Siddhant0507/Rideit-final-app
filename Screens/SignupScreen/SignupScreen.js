import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';
import React ,{useState} from 'react';
import styles from './styles';
import { ref, set } from "firebase/database";
import { db } from './../../firebaseConfig';
import { firestore } from '@react-native-firebase/firestore';


const SignupScreen = ({navigation}) => {
  const [number, onChangeNumber] = React.useState("");
    const [name, onChangeName] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
  
    const submitInfo = () =>{
      set(ref(db, 'users/' + name), {
        username: name,
        email: email,
        number: number,
      }).then(()=>{
        alert("data added to the database");
      }).catch((error)=>{
          alert(error);
      })
    navigation.navigate('Home3')
    }

  return (
    <View  style={styles.signupContainer} >
    <Text style={styles.headingText}>Few Steps Away from your journy....</Text>
    <View style={styles.inputView}>
    <TextInput
      style={styles.loginInput}
      placeholder="Enter full Name"
      onChangeText={(name) => {onChangeName(name)}}
      value={name}
      placeholderTextColor='#444'
      autoCapitalize='none'
      textContentType='userName'
      autoFocus={true}
      keyboardType="email-type"
    /></View>

  <View style={styles.inputView}><TextInput
      style={styles.loginInput}
      placeholder="Enter Email"
      onChangeText={(email) => {onChangeEmail(email)}}
      value={email}
      placeholderTextColor='#444'
      autoCapitalize='none'
      textContentType='userName'
      autoFocus={true}
      keyboardType="email-type"
    /></View>
    <View style={styles.inputView}><TextInput
      style={styles.loginInput}
      onChangeText={onChangeNumber}
      value={number}
      placeholderTextColor='#444'
      placeholder="Enter Your Number"
      keyboardType="numeric"
    /></View>

    <TouchableOpacity onPress={submitInfo}>
    <View style={styles.button}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </View>
    </TouchableOpacity> 

    
    
</View>
  )
}

export default SignupScreen
