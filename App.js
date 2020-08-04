import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPallete from './screens/ColorPallete';


const Stack = createStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ColorPallete" component={ColorPallete} />
        </Stack.Navigator>
    </NavigationContainer>
  )

};





export default App