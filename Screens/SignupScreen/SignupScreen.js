import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React ,{useState} from 'react';
import styles from './styles';

const SignupScreen = ({navigation}) => {
  const [number, onChangeNumber] = React.useState("");
    const [name, onChangeName] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
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

    <TouchableOpacity onPress={()=>navigation.navigate('Home3')}>
    <View style={styles.button}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </View>
    </TouchableOpacity> 

    
    
</View>
  )
}

export default SignupScreen
