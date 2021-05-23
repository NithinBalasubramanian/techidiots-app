import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './component/include/Menu';
import Home from './component/main/home';

export default function App() {
  return (
    <>
      <View style={styles.body}>
      <Menu />
      </View>
      <Home />
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f0f5f4',
    margin:0,
    paddingTop: 0,
    height : 80,
  },
});
