/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import Header from './components/Header';
import Components from './components/Components';
import Footer from './components/Footer';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.wrapper}>
        <Header />
        <Components />
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
  wrapper: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default App;
