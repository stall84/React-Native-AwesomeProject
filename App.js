import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';


const App = () => {

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.cyan]} >
        <Text style={styles.text} >Cyan: #2aa198</Text>
      </View>
      <View style={[styles.container, styles.blue]} >
        <Text style={styles.text} >Blue: #268bd2</Text>
      </View>
      <View style={[styles.container, styles.magenta]} >
        <Text style={styles.text} >Magenta: #d33682</Text>
      </View>
      <View style={[styles.container, styles.orange]} >
        <Text style={styles.text} >Orange: #cb4b16</Text>
      </View>
    </SafeAreaView>
  )

};


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  text:{
    color: 'white'
  },
  container: {
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  cyan: {
    marginVertical: 10,
    backgroundColor: '#2aa198'
  },
  blue: {
    marginVertical: 10,
    backgroundColor: '#268bd2'
  },
  magenta: {
    marginVertical: 10,
    backgroundColor: '#d33682'
  },
  orange: {
    marginVertical: 10,
    backgroundColor: '#cb4b16'
  }
})

export default App