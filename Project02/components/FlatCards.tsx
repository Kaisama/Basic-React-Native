import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <ScrollView>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.CardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.CardTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.CardThree]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.CardFour]}>
          <Text>Purple</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 6,
    margin: 8,
  },
  CardOne: {
    backgroundColor: '#EF5354',
  },
  CardTwo: {
    backgroundColor: '#50DBB4',
  },
  CardThree: {
    backgroundColor: '#5DA3FA',
  },
  CardFour: {
    backgroundColor: '#a83179',
  },
});
