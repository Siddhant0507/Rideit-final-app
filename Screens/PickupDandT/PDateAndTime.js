import { Platform, StyleSheet, Text, View , SafeAreaView, Button, TouchableOpacity} from 'react-native'
import React ,{useState} from 'react';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import Map from '../../Components/Map';

const PickupDandT = ({navigation,route}) => {
    const [date , setDate] = useState(new Date());
    const [mode , setMode] = useState('date');
    const [show , setShow] = useState(false);
    const [text,setText] = useState('Select PickUP Date');

    const onChange = (event , selectedDate)  =>{
        const currentDate = selectedDate || date ;
        setShow(Platform.OS ==='ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = 'PickUp Date : '+tempDate.getDate() + '/'+(tempDate.getMonth()+1)+ '/'+tempDate.getFullYear();
        let fTime = 'Pickup Time : Hours ' + tempDate.getHours() +'| Minutes '+ tempDate.getMinutes();
        setText(fDate +'\n'+ fTime)

        console.log(fDate +'('+fTime+')');
    }


    const showMode = (currentMode)=>{
        setShow(true);
        setMode(currentMode)
    }
  return (
    <View>
    <View style={styles.mapview}>
      <Map/>
    </View>


    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View  style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>showMode('date')} style={styles.button}>
          <Text style={styles.buttonText}>Pickup Date </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>showMode('time')} style={styles.button}>
          <Text style={styles.buttonText}>Pickup time </Text>
        </TouchableOpacity> 
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('DropDandT',{rideItem:route.params.rideItem,pickDate:date})} style={styles.nextButton}>  
              <Text style={styles.buttonText}> Next </Text>
        </TouchableOpacity>
       

        {show && (
            <DateTimePicker 
            testID='dateTimePicker'
            value={date}
            mode={mode}
            is24Hour={false}
            display='compact'
            onChange={onChange}
            />
        )}



    </SafeAreaView>
    </View>
  )
}

export default PickupDandT

