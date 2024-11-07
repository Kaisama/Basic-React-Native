import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({route, navigation}) => {
  const {name = '', age = 0} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Text>Name:{name}</Text>
      <Text>Age:{age}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
