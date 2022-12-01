import { Button, StyleSheet, Text, View ,SafeAreaView,TouchableOpacity,Image} from 'react-native'
import React from 'react';
import styles from './styles';


import AutoComplete from '../../Components/AutoComplete';
import Map from '../../Components/Map';
import IonIcons from "react-native-vector-icons/Ionicons";

import {GOOGLE_MAPS_APIKEY} from '@env'

// import { SliderBox } from 'react-native-image-slider-box';
// import {Carousel} from 'react-native-snap-carousel'; 
// import { FlatListSlider } from 'react-native-flatlist-slider';


const HomeScreen = ({navigation}) => {
  
  return (
    <View style={{flex:1}}>
      <View style={{height:'80%', width:'100%'}}>
          <View style={StyleSheet.absoluteFill}>
           <Map />
           </View>
         <TouchableOpacity style={styles.menuButton} onPress={()=>navigation.openDrawer()}>
      <Text><IonIcons name='menu'  size={35}  color={'white'}/> </Text>
      </TouchableOpacity>

            <AutoComplete/>   
      </View>
      
    <View style={styles.bottomContainer}>
      <TouchableOpacity style={styles.buttons} onPress={()=>navigation.navigate('PickupDandT')}>
      <Text style={styles.buttonText}>Book a Ride </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons} onPress={()=>alert("Development is in Progress")}>
      <Text style={styles.buttonText}>Explore Packages </Text>
      </TouchableOpacity>


    </View>

      


    </View>
  )
}

export default HomeScreen
