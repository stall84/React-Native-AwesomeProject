import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import PalettePreview from '../components/PalettePreview';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Reformating we will put all of our color objects in Home, and pass them down
// via Navigator's param-props



const Home = ({ navigation }) => {

    // Beginning to set up Hooks to fetch color palettes from web api

      // First function establishes our state, and state updating function
    const [colorPalettes, setPalettes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
      // Make a function to handle changing the loading state
    const loadFunc = useCallback( async () => {
      setIsLoading(true);
      await fetchPalettes();
          // using setTimeout to provide for a UI experience where loading is implied even if it's super fast
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, [])
      // fetchPalettes function utilizes useCallback hook to define our API data retrieving mechanism.
      // An empty array is the 2nd argument ensuring the function only gets called one time per load and not on 
      // every single re-render, or potentially infinitely-loopy

    const fetchPalettes = useCallback( async () => {
      const response = await fetch('https://color-palette-api.kadikraman.now.sh/palettes')
      if (!response.ok) {
       throw Error(response.statusText)
      } 
        const paletteSelect = await response.json();
        setPalettes(paletteSelect);
    }, [])

    // useEffect hook in this instance will call fetchPalettes hook only once upon rendering
    // using the empty array 2nd argument to achieve this once-only instead of infinitely restriction.

    useEffect(() => {
      fetchPalettes()
    }, [])

    return (
        
            <FlatList 
            style={styles.list}
            data={colorPalettes}
            keyExtractor={item => item.paletteName}
            refreshing={isLoading}
            // Using refreshing and onRefresh props. onRefresh will call our callback hook loadFunc
            onRefresh={loadFunc}
            // Below we add a ListHeaderComponent that will render a touchable section to birng up our Modal
            ListHeaderComponent={<TouchableOpacity><Text>Launch Modal</Text></TouchableOpacity>}
            renderItem={ ({ item }) => (

            <PalettePreview
            handlePress={() => {
              navigation.navigate('ColorPalette', item)
            }}
            colorPalette={item}
            />
            )}
        />

        )}
      
const styles = StyleSheet.create({
  list: {
    padding: 20,
    backgroundColor: 'white',
  }
})

export default Home; 