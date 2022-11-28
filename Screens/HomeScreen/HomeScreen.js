import { Button, StyleSheet, Text, View ,SafeAreaView,TouchableOpacity,Image} from 'react-native'
import React from 'react';
import styles from './styles';
import AutoComplete from '../../Components/AutoComplete';
import Map from '../../Components/Map';
import { FlatList } from 'react-native-gesture-handler';
// import { SliderBox } from 'react-native-image-slider-box';
// import {Carousel} from 'react-native-snap-carousel'; 
// import { FlatListSlider } from 'react-native-flatlist-slider';


const HomeScreen = ({navigation}) => {
  const images =[
    { 
      id:1,
    image:require('../../assets/image1.png')
  },
    { 
      id:2,
       image:require('../../assets/image2.png')
    },
    {
    id:3,
    image:require('../../assets/image3.png'),
    }
  ]
  return (
    <View>
      <View style={styles.mapScreen}>
        <AutoComplete/>
        {/* <Map/> */}
      </View>

      

      <TouchableOpacity style={styles.buttons} onPress={()=>navigation.navigate('PickupDandT')}>
      <Text style={styles.buttonText}>Book a Ride </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons} onPress={()=>alert("Development is in Progress")}>
      <Text style={styles.buttonText}>Explore Packages </Text>
      </TouchableOpacity>

      <Button title='open Drawer' onPress={()=>navigation.openDrawer()} style={{marginTop:50}}></Button>

      <View>
       <Text>Why Choose Us... </Text>
      {/* <FlatListSlider
      data={images}
      height={240}
      timer={5000}
      
      
      /> */}
      <FlatList   
       data={images}
       renderItem={(element)=>{
        return <Text>element.item.image</Text>
       }}
       />

      <Image
      source={require('../../assets/quote2.png')}
      style={styles.logo}/>
      </View>


    </View>
  )
}

export default HomeScreen
