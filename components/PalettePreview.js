import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, FlatList } from 'react-native';

const PalettePreview = ({ handlePress, colorPalette }) => {


    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>{colorPalette.paletteName}</Text>
            <FlatList 
                style={styles.list}
                horizontal={true}
                data={colorPalette.colors.slice(0, 5)}
                keyExtractor={item => item.colorName}
                renderItem={ ({ item }) => <View style={[styles.box, { backgroundColor: item.hexCode }]}></View>}
            />
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    box: {
        height: 30,
        width: 30,
        marginRight: 7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
    }, 
    list: {
        marginBottom: 20,
    }
})

export default PalettePreview;