import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../PillsReminderApp/src/screens/LoginScreen';
import HomeScreen from '../PillsReminderApp/src/screens/HomeScreen'

const Stack = createNativeStackNavigator();

const App = () => {


  return (
   < NavigationContainer>
   <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Home" component={HomeScreen}/>
   </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})