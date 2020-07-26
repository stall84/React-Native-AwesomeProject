import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {

  return (
    <SafeAreaView style={styles.safeArea}>
      <ColorBox colorName='Cyan' colorHex='#2aa198' /> 
      <ColorBox colorName='Blue'  colorHex='#268bd2' />
      <ColorBox colorName='Magenta'  colorHex='#d33682' />
      <ColorBox colorName='Orange'  colorHex='#cb4b16' />
      
    </SafeAreaView>
  )

};


const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  
})

export default App