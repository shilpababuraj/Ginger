import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const HomeScreen = () => {

  const [medicationSchedule, setMedicationSchedule] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date())

const data=[

]

const renderMedicationItem =({item}) =>
{
  <View>
    <Text></Text>
  </View>
}

  return (
    <View style={styles.container}>
      <Text>Medication Schedule</Text>
      <FlatList
        data={}
        renderItem={}
        keyExtractor={item=>item.id.toString()}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})