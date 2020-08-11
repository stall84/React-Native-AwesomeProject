import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text } from 'react-native';
import SolarizeBox from '../components/SolarizeBox';



  

// Receiving color props from above Home.js
// React Navigation requires you pull props from the 'home/parent' component by using
// destructuring individual route.params from the route prop
const ColorPallete = ({ route }) => {

  // destructure individual props out of route params
const { palleteName, colors } = route.params;


    return (

    <SafeAreaView style={styles.safeArea}>
      

            <FlatList 
                data={colors}
                keyExtractor={item => item.colorName}
                renderItem={({item}) =>
                            <SolarizeBox 
                            colorName={item.colorName} 
                            colorHex={item.hexCode} 
                            />}
                ListHeaderComponent={<Text style={styles.heading} >{palleteName}</Text>}
            />
            


    </SafeAreaView>

)
}

const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: 'white',
      flex: 1
    },
    heading: {
      fontSize: 18,
      textAlign: 'center',
    }
    
  })

export default ColorPallete; 