import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SolarizeBox = ({colorName, colorHex}) => {

    // We're getting our color name and color hex code passed down from the App component above
    // Setting those to style properties 'boxStyle' then calling those styles in the render function below

    const boxStyle = {
        backgroundColor: colorHex,
        colorName: colorName
    }

    const textColor = {
        color: 
            parseInt(colorHex.replace('#',''), 16) > 0xffffff / 1.1
                ? 'black'
                : 'white'
    }
        

    return (
        // Still a little confused as to why merely 'boxStyle' gets called/passed instead of 'boxStyle.backgroundColor'

        <View style={[ styles.containerBox, boxStyle ]}>
            <Text style={textColor}>
                {boxStyle.colorName}
            </Text>
        </View>
    )
}

// Instantiate and define styling for individual color boxes using StyleSheet component

const styles = StyleSheet.create({
    containerBox: {
        alignItems: 'center',
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
       
    },
});

export default SolarizeBox;