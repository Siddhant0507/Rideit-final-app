import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TouchableHighlight } from "react-native";

const RideDetailScreen = ({ navigation, route }) => {
  const pickDate = new Date(route.params.pickDate)
  const dropDate = new Date(route.params.dropDate)
  var hours = Math.abs(pickDate - dropDate) / 36e5
  console.log(Math.round(hours))

  return (

    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: '#f5f5f5', paddingTop: '14%' }}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Image source={require('../../assets/back_arrow.png')} resizeMode='contain' style={{ height: 30, width: 30, marginStart: '5%' }} />
        </TouchableOpacity>
        <Text style={{ marginStart: '5%', marginTop: '4%', fontWeight: '700', fontSize: 22, color: '#1c1c1c' }}>{route.params.rideItem.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '4%', marginBottom: '6%' }}>
          <Image source={require('../../assets/automatic.png')} resizeMode='contain' style={{ height: 20, width: 20, marginStart: '5%', tintColor: '#aeaeae' }} />
          <Text style={{ marginStart: '1%', fontWeight: '400', fontSize: 13, color: '#aeaeae' }}>Automatic</Text>
          <Image source={require('../../assets/petrol.png')} resizeMode='contain' style={{ height: 20, width: 20, marginStart: '5%', tintColor: '#aeaeae' }} />
          <Text style={{ marginStart: '1%', fontWeight: '400', fontSize: 13, color: '#aeaeae' }}>Petrol</Text>
        </View>

      </View>
      <Image style={{
        height: 90,
        width: 90,
        alignSelf: 'flex-end',
        marginTop: '-14%',
        marginEnd: '2%'
      }} resizeMode='cover' source={{ uri: route.params.rideItem.image }} />

      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', marginStart: '5%', marginTop: '4%' }}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#e7fee9', height: 30, width: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: '#15a613', height: 10, width: 10, borderRadius: 50 }}></View>
              </View>
              <View style={{ height: 25, width: 2, backgroundColor: '#e7fee9' }}></View>
              <View style={{ height: 25, width: 2, backgroundColor: '#fef3f0' }}></View>
              <View style={{ backgroundColor: '#fef3f0', height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: '#dd2f2f', height: 10, width: 10 }}></View>
              </View>
            </View>
            <View style={{ flexDirection: 'column', marginTop: 5, marginStart: '4%' }}>
              <Text>{`${pickDate.toLocaleString()}`}</Text>
              <Text style={{ color: '#aeaeae' }}>katraj</Text>
              <Text style={{ marginTop: 40 }}>{`${dropDate.toLocaleString()}`}</Text>
              <Text style={{ color: '#aeaeae' }}>katraj</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: '5%', marginTop: '10%' }}>
            <Image source={require('../../assets/gas-station.png')} resizeMode='contain' style={{ height: 30, width: 30 }} />
            <Text style={{ marginStart: '4%' }}>Unlimited Kms without fuel</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: '5%', marginTop: '10%', alignItems: 'center' }}>
            <Image source={require('../../assets/star.png')} resizeMode='contain' style={{ height: 30, width: 30, tintColor: '#c37b0f' }} />
            <Text style={{ marginStart: '4%' }}>4.95 (28)</Text>
            <View style={{ height: 2, width: 2, backgroundColor: 'black', borderRadius: 50, marginHorizontal: 10 }}></View>
            <Text>{route.params.rideItem.km_driven} kms driven</Text>
          </View>
          <Text style={{ backgroundColor: '#f0f4ff', color: '#777cb9', fontWeight: '700', paddingTop: 10, paddingBottom: 10, borderRadius: 5, marginLeft: 18, marginRight: 18, marginTop: '4%', textAlign: 'center' }}>Free Cancellation up to 24 October 2022,2:00 AM</Text>
          <TouchableHighlight onPress={() => { }}>
            <Text style={{ backgroundColor: '#0ca30e', color: 'white', fontWeight: '500', paddingTop: 10, paddingBottom: 10, borderRadius: 5, marginLeft: 18, marginRight: 18, marginTop: '10%', textAlign: 'center' }}>PROCEED TO PAY ₹ {Math.round(route.params.rideItem.price * hours)}</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  )
}
export default RideDetailScreen

