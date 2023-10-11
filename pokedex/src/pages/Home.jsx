import { Platform, StyleSheet, Text, View, useColorScheme, ScrollView, SafeAreaView, TextInput, Button, Pressable } from 'react-native'; //StatusBar
import * as React from 'react'
 export const Home =({navigation})=>{

    return(
        <>
        <View style={styles.container}>
           <Text style={styles.text}>Pokedex</Text>
           <Pressable style={styles.button} onPress={() => navigation.navigate('Search') } title='Enter' >Enter</Pressable>
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
        paddingHorizontal: '1em',
        paddingVertical: '.5em',
    }
  });

// export default Home