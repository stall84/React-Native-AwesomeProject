import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const Home = ({ navigation }) => {

    return (
        <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('ColorPallete');
            }}>
                <Text>Hi Bish! Wanna Look at some SOLARIZED COLORS?!!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home; 