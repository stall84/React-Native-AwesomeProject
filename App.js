import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPaletteModal from './screens/ColorPaletteModal';
import ColorPalette from './screens/ColorPalette';


const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

// See React-Navigation https://reactnavigation.org/docs/modal/
// This is a little involved, but to create modals you have to base it off a 'root' stack
// So we create a MainStackScreen component which will now hold the Home and ColorPalette screens nav
// And we also create a new RootStack component in the main App portion out of wich our Modal is returned

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {

  return (
    <NavigationContainer>
        <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen 
          name="ColorPaletteModal"
          component={ColorPaletteModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )

};





export default App