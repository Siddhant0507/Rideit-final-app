import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
    container:{
      marginTop:500,
      marginHorizontal:20,
      justifyContent:'center'
    },
    buttonContainer:{
      display:'flex',
      justifyContent:'center',
      flexDirection:"row",
    },
    text:{
        fontSize:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        backgroundColor: 'rgba(123,104,238,0.8)',
        height: 55,
        display:'flex',
        width:'45%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginHorizontal: 10,
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
      calender:{
        borderRadius: 20,
            margin: 40,
            borderColor: "black",
            borderWidth: 1,
      },
      nextButton:{
        backgroundColor: 'rgba(123,104,238,0.8)',
        height: 55,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white'
      }



})
export default styles;