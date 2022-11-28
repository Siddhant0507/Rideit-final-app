import { StyleSheet, Text, View,Image,useWindowDimensions, Dimensions} from 'react-native'
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './styles';

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Onboarding
    onSkip={()=>navigation.replace('First')}
    onDone={()=>navigation.replace('First')}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('./../../assets/multipleRides.png')} style={styles.image}/>,
      title: 'Multiple Ride Options ',
      subtitle: 'Choose your Ride from Varity of diffirent options available',
    },
    {
        backgroundColor: '#fff',
        image: <Image source={require('./../../assets/Online_payments.png')} style={styles.image} />,
        title: 'Online Payment Options',
        subtitle: 'Confirm your ride by paying by credit or debit card',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('./../../assets/Exploring1.png')} style={styles.image} />,
        title: 'Unlimited KMs',
        subtitle: 'Travel along the world in your booking time with no limit of distance',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('./../../assets/easyCancellation.png')} style={styles.image}/>,
        title: 'Easy Cancellation',
        subtitle: 'Cancle your ride before 24 hours and get instant refund without any extra charges',
      },
  ]}
/>

    </View>
  )
}

export default OnboardingScreen

