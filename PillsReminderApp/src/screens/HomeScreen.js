import {FlatList, StyleSheet, Text, TouchableOpacity, View,Alert} from 'react-native';
import {useState,useEffect} from 'react';

const HomeScreen = ({route}) => {
  const {authToken} = route.params;
  const [medicinesForToday, setMedicinesForToday] = useState([]);
  const [datesWithMedicine, setDatesWithMedicine] = useState(['2024/01/25']);

useEffect(() => {
  fetchMedicine(datesWithMedicine);
}, []);


const fetchMedicine =(date)=>
{
  fetch('https://mypillsreminder.com/v1/api/dashboard',{
    method : 'POST',
    header : {
      'content-Type' : 'application/json',
      'Authorization' : 'Bearer' + authToken
    },
    body:JSON.stringify({selected_date:date})
  })
  .then(response=>{
    if(response.ok)
    {
      throw new Error ('Failes to fetch medicine details')
    }
    return response.json();
  })
  .then(data=>
    {
      console.log('Response data:', data)
      setMedicinesForToday(data)
    })
    .catch(error =>{
      console.error('Error :',error);
      console.error('Response Status:', error.response?.status);
      console.error('Response Text:', error.response?.statusText)
      Alert.alert('Error','Failed to fetch medicine details.Please try again')
    })
}



  const handleAddReminder =()=>
  {
//  implement to add new medicine
  }

  const handleMarkConsumed =()=>
  {
    // implement to mark medicine consumed
  }
  const handleMarkSkipped =()=>
  {
    //implement to mark medicine skipped
  }
  return (
   
    <View style={styles.container}>
      <Text style={styles.title}>Medicines for Today</Text>
      <FlatList
        data={medicinesForToday}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.medicineListContainer}>
            <Text>medicine name :item.data.medicine_name </Text>
            <Text>medicine strength :item.data.medicine_strength </Text>
           
          </View>
        )}
      />

      <Text style={styles.title}>Dates With Medicines</Text>
      <FlatList
        data={datesWithMedicine}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.medicineListContainer}>
            <Text style={{marginVertical:5}}>{item}</Text>
          </View>
        )}
      />

<TouchableOpacity style={styles.button} onPress={handleAddReminder}>
  <Text style={styles.buttonText}>Add Reminder</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={handleMarkConsumed}>
  <Text style={styles.buttonText}>Mark Consumed</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={handleMarkSkipped}>
  <Text style={styles.buttonText}>Mark Skipped</Text>
</TouchableOpacity>


    </View>
  
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
flex:1,
padding:20,
backgroundColor:'#ffffff'
  },
  title:{
    fontSize:24,
    marginBottom:20
  },
  medicineListContainer:{
  marginBottom:10
  },
  button: {
    width: '80%',
    margin: 25,
    padding: 10,
    backgroundColor: '#3eb16e',
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});
