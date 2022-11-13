import { Button, StyleSheet, Text, View ,SafeAreaView,TouchableOpacity} from 'react-native'
import React from 'react';
import styles from './styles'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      
      
      <View style={styles.mapScreen}></View>
      <TouchableOpacity style={styles.buttons} onPress={()=>navigation.navigate('PickupDandT')}>
      <Text style={styles.buttonText}>Book a Ride </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons} onPress={()=>alert("Development is in Progress")}>
      <Text style={styles.buttonText}>Explore Packages </Text>
      </TouchableOpacity>

      <Button title='open Drawer' onPress={()=>navigation.openDrawer()} style={{marginTop:50}}></Button>
    </SafeAreaView>
  )
}

export default HomeScreen
