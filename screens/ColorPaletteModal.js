import React, { useState, useCallback } from 'react';
import { 
        View, 
        Text, 
        TextInput, 
        StyleSheet, 
        TouchableOpacity,
        Alert } from 'react-native';


const ColorPaletteModal = () => {

    const [ name, setName ] = useState('');

    const handleSubmit = useCallback(() => {
        if (!name) {
            Alert.alert('Please Enter A Palette Name')
        }
    },[name] )

    return (
        <View style={styles.container}>
            <TextInput style={styles.inputForm} 
                        value={name} 
                        onChangeText={value => setName(value)} 
                        placeholder="Palette Name" />
            <Text style={styles.inputTag} >Name of Palette</Text>
            <TouchableOpacity style={styles.button}
                               onPress={handleSubmit} >
               <Text style={styles.buttonText} >Submit</Text>
            </TouchableOpacity>
        </View>
    )

}

export default ColorPaletteModal ;

const styles = StyleSheet.create({
    inputForm: {
        color: 'red',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 4
    },
    container: {
        padding: 15,
        backgroundColor: 'white',
        flex: 1,
    },
    button: {
        backgroundColor: 'teal',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    inputTag: {
        marginBottom: 5,
        padding: 5,
        textAlign: 'center',
        fontWeight: 'bold',

    }
})