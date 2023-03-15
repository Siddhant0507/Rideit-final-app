import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

const PaymentScreen = (navigation) => {
  const [cardNumber , setCardNumber] = useState('')
  const [cvv , setCvv]= useState('')
  const [expiry , setExpiry] = useState('')
  return (
    <View>
      
         <Text>Enter Card Number</Text>
         <TextInput
         placeholder="Enter card Number"
         onChangeText={(cardNumber) => {setCardNumber(cardNumber)}}
         value={cardNumber}
         placeholderTextColor='#444'
         autoCapitalize='none'
         textContentType='userName'
         autoFocus={true}
         keyboardType="numeric"
         />
         <TextInput
         placeholder="Enter CVV"
         onChangeText={(cvv) => {setCvv(cvv)}}
         value={cvv}
         placeholderTextColor='#444'
         autoCapitalize='none'
         textContentType='userName'
         autoFocus={true}
         keyboardType="numeric"
         />
         <TextInput
         placeholder="Enter Expiry details"
         onChangeText={(expiry) => {setExpiry(expiry)}}
         value={expiry}
         placeholderTextColor='#444'
         autoCapitalize='none'
         textContentType='userName'
         autoFocus={true}
         keyboardType="numeric"
         />

<TouchableOpacity onPress={()=>{navigation.navigate('')}}>
    <View style={styles.button}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </View>
    </TouchableOpacity> 

    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})