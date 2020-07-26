import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const ColorBox = ({ colorName, colorHex }) => {

    const boxColor = {
        backgroundColor: colorHex
    }

    return (
        // Passing in our styles via props, in this case an array of styles
    <View style={[styles.container, boxColor]} >
        {/* Again passing down dynamic data via props (colorName colorHex) */}
        <Text style={styles.text} >{colorName}: {colorHex}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color: 'white'
      },
      container: {
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 20
      }
})

export default ColorBox