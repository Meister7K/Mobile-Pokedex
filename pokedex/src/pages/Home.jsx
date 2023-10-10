import { Platform, StyleSheet, Text, View, useColorScheme, ScrollView, SafeAreaView, TextInput, Button } from 'react-native'; //StatusBar
import * as React from 'react'
 export const Home =()=>{

    return(
        <>
        <View style={styles.container}>
           <Text style={styles.text}>Pokedex</Text>
           <button style={styles.button}  >Enter</button>
        </View>
        </>
    )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontWeight: 'bold',
      fontSize: '3em',
      textAlign: 'center'
      
    },
    button:{
        backgroundColor: 'rgba(255,255,255, 0.5)',
        backdropFilter: "blur(5px)",
        borderRadius: 5,
        fontWeight: 'bold',
    }
  });

// export default Home