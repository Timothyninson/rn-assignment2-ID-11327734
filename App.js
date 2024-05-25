import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is <Text style={{fontWeight: 'bold'}}>Timothy</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF00', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, 
    fontWeight: 'bold', 
  },
});