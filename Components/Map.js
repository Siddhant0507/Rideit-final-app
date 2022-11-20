import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import MapView,{Marker} from 'react-native-maps';

const Map = () => {
  return (
    <View>
      <MapView
      style={{flex:1, height:200,margin:20}}
      mapType="mutedStandard"
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
  > 
  
  <Marker
  coordinate={{
    latitude: 37.78825,
    longitude: -122.4324 }}
    title="Origin"
    description='this is Your current Location'
    identifier='Origin' 
  />
  </MapView>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})