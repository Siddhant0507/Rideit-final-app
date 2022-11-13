import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  }, signupContainer:{
    marginTop:50,
  },
  loginInput:{
    height: 55,
   alignItems: 'center',
    justifyContent: 'center', 
    // borderRadius: 15,
    marginHorizontal: 20,
    // marginVertical: 10,
    // borderWidth: 1,
    fontSize: 18,
    textAlign:'center',
    fontWeight:'600'
 },
 inputView:{
    borderBottomWidth:1,
    marginHorizontal:40,
    marginVertical:5,
 },
  signupImage:{
    height:100,
    width:150,
  },
  headingText:{
    marginVertical:20,
    fontSize:28,
    fontWeight:'500',
    paddingHorizontal:20,
  },
  button: {
    backgroundColor: 'rgba(123,104,238,0.8)',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: 'white'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5
  },
  bottomContainer: {
    justifyContent: 'center',
    height: height / 3,
  },
  textInput: {
    height: 50,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingLeft: 10
  },

  
  formButton: {
    backgroundColor: 'rgba(123,104,238,0.8)',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formInputContainer: {
    marginBottom: 70
  },
  closeButtonContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20
  },

  // login page stylings

 
  otpImage:{
    height:150,
    width:width/2,
    marginTop:height/2,
  }

});

export default styles;