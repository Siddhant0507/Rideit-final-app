import React, { useState, useEffect } from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { StyleSheet, View, Text, Button } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useSelector } from "react-redux";
import { selectOrigin } from "../Slices/navSlice";

import * as Location from "expo-location";

// live location can be added .. follow the doc for that
export default function Map() {
  // const [pin, setPin] = useState({ latitude: 37.78825, longitude: -122.4324 });
  // const origin = useSelector(selectOrigin);

  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,});

  const [errorMsg, setErrorMsg] = useState(null);

  const userLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({enableHighAccuracy :true});
      setMapRegion({
        latitude:location.coords.latitude,
        longitude:location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.0005
      });
      console.log(location.coords.latitude,location.coords.longitude)
    }

    useEffect(()=>{
      userLocation();
    },[])


  return (
    <View style={{ flex: 1, backgroundColor: "purple" }}>
      <MapView
        style={styles.map}
        mapType="mutedStandard"
        region={mapRegion}
      >
        <Marker
          coordinate={mapRegion}
          title="origin"
          description='this is desc'
          identifier="origin"
          pinColor="red">
          <Callout>
            <Text>I am here</Text>
          </Callout>
        </Marker>
      </MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});





// draggable={true}
          // onDragStart={(e) => {
          //   console.log("drag start", e.nativeEvent.coordinate);
          // }}
          // onDragEnd={(e) => {
          //   setPin({
          //     latitude: e.nativeEvent.coordinate.latitude,
          //     longitude: e.nativeEvent.coordinate.longitude,
          //   });
          // }}

          {/* <Circle center={pin} radius={500}></Circle> */}