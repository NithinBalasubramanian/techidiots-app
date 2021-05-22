import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './component/include/menu';
import Home from './component/main/home';

export default function App() {
  return (
    <View style={styles.body}>
      <Menu ></Menu>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f0f5f4',
    margin:0,
    padding: 0,
  },
});
