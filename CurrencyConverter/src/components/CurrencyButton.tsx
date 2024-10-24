import React from 'react';
import type {PropsWithChildren} from 'react';

import {View, Text, StyleSheet} from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;
const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContianer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContianer: {
    alignItems: 'center',
  },
  country: {
    fontSize: 17,
    color: '#2d3436',
    marginBottom: 4,
  },
  flag: {
    fontSize: 28,
    color: '#FFFFFF',
  },
});

export default CurrencyButton;
