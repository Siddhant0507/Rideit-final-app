import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop:60,
    marginHorizontal:10
  
  
  },
  loginContainer:{
    marginTop:30,
  },
  button: {
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
  buttonText: {
    fontSize: 20,
    color: 'white',
    letterSpacing: 0.5
  },
  headingText:{
    fontSize:32,
    fontWeight:"600",
    marginHorizontal:15,
    
  },
  subHeadingText:{
    marginVertical:10,
    fontSize:20,
    fontWeight:"400",
    marginHorizontal:15,
  },
  loginInput:{
    height: 55,
   alignItems: 'center',
    justifyContent: 'center', 
    marginHorizontal: 20,
    fontSize: 20,
    textAlign:'center',
 },
 backButton:{
  // height:'2.5rem',
  borderRadius:100,
  backgroundColor:'black',
  // width:'2.5rem'

 },
 inputView:{
    borderBottomWidth:1,
    marginHorizontal:30,
    marginVertical:20,

 }
 
  

});

export default styles;