import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
    bottomContainer: {
      backgroundColor:'#fff',
      paddingTop:5,
      height:'30%'
    },
    mapScreen:{
      flex:1,
      height:height/2,
      width:width,
      backgroundColor:"gray",
    },
    menuButton:{
      height:50,
      width:50,
      backgroundColor:'rgba(123,104,238,0.8)',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:15,
      zIndex:1,
      marginLeft:20,
      marginTop:50

    },
    buttons:{
      backgroundColor: 'rgba(123,104,238,0.8)',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      marginHorizontal: 20,
      marginVertical: 5,
      borderWidth: 1,
      borderColor: 'white'
    },
    buttonText:{
      fontSize: 16,
      fontWeight: '600',
      color: 'white',
      letterSpacing: 0.5
    },
    googleAutocomplete:{
      marginVertical:10,
      marginHorizontal: 20,
      marginVertical: 10,
      borderRadius: 15,
    },
    logo:{
      height:150,
      width:150,
    }

})

export default styles;
