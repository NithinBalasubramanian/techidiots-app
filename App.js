import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './component/include/menu';

export default function App() {
  return (
    <View style={styles.body}>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    margin:0,
    padding: 0,
  },
});
