import { ImageBackground, StyleSheet, Text, View ,Image} from 'react-native'
import React, { cloneElement } from 'react';
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import IonIcons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomDrawer = (props) => {
  return (
    <View style={{flex:1}}>
   <DrawerContentScrollView>
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Image source={require('../assets/icon.png')} style={{padding:20, height:100, borderRadius:40,marginBottom:10, width:100}}/>
    <Text> User Name</Text>
    </View>
    <DrawerItemList {...props} />
   </DrawerContentScrollView>
    <View  style={{padding:20,borderTopWidth:1, borderTopColor:'#ccc'}}>
    <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
       <View style={{flexDirection:'row', alignItems:'center' }}>
        <IonIcons name='share-social-outline' size={22}/>
        <Text style={{fontSize:15,marginLeft:5}}> Share With a Firend</Text>
       </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
       <View style={{flexDirection:'row', alignItems:'center' }}>
        <IonIcons name='exit-outline' size={22}/>
        <Text style={{fontSize:15,marginLeft:5}}>Sign Out</Text>
       </View>
    </TouchableOpacity>
    </View>

   </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})