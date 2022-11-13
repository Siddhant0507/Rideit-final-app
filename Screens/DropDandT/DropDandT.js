import { Platform, Text, View , SafeAreaView, TouchableOpacity} from 'react-native'
import React ,{useState} from 'react';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';

const DropDandT = ({navigation}) => {
    const [date , setDate] = useState(new Date());
    const [mode , setMode] = useState('date');
    const [show , setShow] = useState(false);
    const [text,setText] = useState('Select Drop Date AND Time');

    const onChange = (event , selectedDate)  =>{
        const currentDate = selectedDate || date ;
        setShow(Platform.OS ==='ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = 'Drop Date : '+tempDate.getDate() + '/'+(tempDate.getMonth()+1)+ '/'+tempDate.getFullYear();
        let fTime = 'Drop Time : Hours ' + tempDate.getHours() +'| Minutes '+ tempDate.getMinutes();
        setText(fDate +'\n'+ fTime)

        console.log(fDate +'('+fTime+')');
    }


    const showMode = (currentMode)=>{
        setShow(true);
        setMode(currentMode)
    }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View  style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>showMode('date')} style={styles.button}>
          <Text style={styles.buttonText}>Drop Date </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>showMode('time')} style={styles.button}>
          <Text style={styles.buttonText}>Drop time </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.nextButton}>
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
  )
}

export default DropDandT
