import { StyleSheet, Dimensions } from "react-native";
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(123,104,238,0.8)',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,

    
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5
  },
  
  loginImage:{
    height:560,
    width:width,
  },
  headingText:{
    fontSize:27,
    fontWeight:'500',
    paddingLeft:20,
    paddingBottom:10,
  },
  tandc:{
    paddingTop:3,
    paddingHorizontal:20,
  
  },
  bottomContainer:{
    backgroundColor:'white'
  }

});

export default styles;