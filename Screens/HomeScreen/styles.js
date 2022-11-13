import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
    },
    mapScreen:{
      height:height*3/4,
      width:width,
      backgroundColor:"gray",
    },
    buttons:{
      backgroundColor: 'rgba(123,104,238,0.8)',
      height: 55,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      marginHorizontal: 20,
      marginVertical: 10,
      borderWidth: 1,
      borderColor: 'white'
    },
    buttonText:{
      fontSize: 20,
      fontWeight: '600',
      color: 'white',
      letterSpacing: 0.5
    },
    googleAutocomplete:{
      marginVertical:10,
      marginHorizontal: 20,
      marginVertical: 10,
      borderRadius: 15,
    }

})

export default styles;
