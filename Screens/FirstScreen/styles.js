import { StyleSheet, Dimensions } from "react-native";
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  button: {
    backgroundColor: 'rgba(123,104,238,0.8)',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 8,

    
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5
  },
  
  loginImage:{
    flex:0.70,
    height:560,
    width:width,
  },

  headingText:{
    fontSize:22,
    fontWeight:'500',
    paddingLeft:20,
    marginTop:5,
    // paddingBottom:5,
  },

  tandc:{
    paddingTop:3,
    paddingHorizontal:20,
  },
  
  bottomContainer:{
    flex:0.34,
    backgroundColor:'white'
  },

});

export default styles;