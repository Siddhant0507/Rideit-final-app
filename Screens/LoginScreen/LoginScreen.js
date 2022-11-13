import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native'
import React from 'react';
import styles from './styles'

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
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
        keyboardType="phone-pad"
        autoCompleteType="tel"
        style={styles.loginInput}
      /></View>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home3')}>
        <Text style={styles.buttonText}> Send Otp</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen
