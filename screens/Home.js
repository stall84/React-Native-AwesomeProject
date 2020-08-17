import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PalettePreview from '../components/PalettePreview';

// Reformating we will put all of our color objects in Home, and pass them down
// via Navigator's param-props
const SOLARIZED = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Violet', hexCode: '#6c71c4' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
  ];

const RAINBOW = [
    { colorName: 'Red', hexCode: '#FF0000' },
    { colorName: 'Orange', hexCode: '#FF7F00' },
    { colorName: 'Yellow', hexCode: '#FFFF00' },
    { colorName: 'Green', hexCode: '#00FF00' },
    { colorName: 'Violet', hexCode: '#8B00FF' },
  ];

  
const FRONTEND_MASTERS = [
    { colorName: 'Red', hexCode: '#c02d28' },
    { colorName: 'Black', hexCode: '#3e3e3e' },
    { colorName: 'Grey', hexCode: '#8a8a8a' },
    { colorName: 'White', hexCode: '#ffffff' },
    { colorName: 'Orange', hexCode: '#e66225' },
  ];

const COLOR_PALETTES = [
    { paletteName: 'Solarized', colors: SOLARIZED },
    { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
    { paletteName: 'Rainbow', colors: RAINBOW },
  ];


const Home = ({ navigation }) => {

    // Beginning to set up Hooks to fetch color palettes from web api

      // First function establishes our state, and state updating function
    const [colorPalettes, setPalettes] = useState([]);
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