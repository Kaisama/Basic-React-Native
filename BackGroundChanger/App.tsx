import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [color, setColor] = useState('ffffff');
  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hexRange[Math.floor(Math.random() * 16)];
    }
    setColor(hexColor);
  };
  return (
    <>
      <StatusBar backgroundColor={color} />
      <View style={[styles.container, {backgroundColor: color}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
