import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';


const App = () => {

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.orange]} >
        <Text>Hello, Bruh!</Text>
      </View>
    </SafeAreaView>
  )

};


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  orange: {
    backgroundColor: 'orange'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'pink',
    borderWidth: 2
  }
})

export default App