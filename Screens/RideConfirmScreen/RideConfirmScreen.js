import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const RideConfirmScreen = () => {
  return (
    <View style={styles.container}>
      <Image
      style={{height:300,width:300}}
      source={require('./../../assets/RideConfirm.png')}/>
      <Text style={styles.heading}>Congratulations !!!</Text>
      <Text style={styles.subHeading}>Your ride is confirm. You can pickup the ride from the nearest pickup point. </Text>
    </View>
  )
}

export default RideConfirmScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        paddingHorizontal:20
    },
    heading:{
        fontSize:24,
        fontWeight:'500',
        marginVertical:10,

    },
    subHeading:{
        fontSize:14,
    }
})
