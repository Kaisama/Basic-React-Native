import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './components/Login';
import Signup from './components/Signup';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab=createBottomTabNavigator();
//const Tab=createMaterialTopTabNavigator();
const App = () => {
  return (
   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="hi" component={Login}/>
      <Tab.Screen name="Signup" component={Signup}/>
    </Tab.Navigator>
   </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
