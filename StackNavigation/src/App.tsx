import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();
const App = () => {
  const btnAction = () => {
    console.warn('Button clicked');
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTitleStyle: {
            fontSize: 25,
            color: 'white',
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => <Text />,
            headerRight: () => <Button title="right" onPress={btnAction} />,
            headerLeft: () => <Home />,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTitleStyle: {
              fontSize: 25,
              color: 'white',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
