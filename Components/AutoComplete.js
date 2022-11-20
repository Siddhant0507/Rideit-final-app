import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { block } from 'react-native-reanimated';

const AutoComplete = () => {
  return (
    <View>
        <GooglePlacesAutocomplete
         nearbyPlacesAPI='GooglePlacesSearch'
         debounce={400}
        placeholder='where form'
        styles={{
            container:{
                flex:0,
                margin:20,
            },
            textInput:{
                fontSize:18,
            }
        }}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
        key:GOOGLE_MAPS_APIKEY,
        language: 'en',
        }}
        onPress={(data, details=null)=>{
            console.log(data)
        }}
        fetchDetails={true}
        returnKeyType={"Search"}
    />
     
    </View>
  )
}

export default AutoComplete

