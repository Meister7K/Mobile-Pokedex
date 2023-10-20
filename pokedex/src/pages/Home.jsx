import { Platform, StyleSheet, Text, View, useColorScheme, ScrollView, SafeAreaView, TextInput, Button, Pressable, Image } from 'react-native'; //StatusBar
import * as React from 'react'
import Img from '../../assets/pokeball.svg'
import { MyBtn } from '../components/MyBtn';



 export const Home =({navigation})=>{

  const navSearch =()=>{
    navigation.navigate('Search')
  }

    return(
        <>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>
            Pokedex
          </Text>
          <Image source={Img} style={styles.img} />
         <MyBtn buttonText={'Enter'} onPress={navSearch}/>
          
        </SafeAreaView>
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
      textAlign: 'center',
      
    },
    button:{
        backgroundColor: 'rgba(255,255,255, 0.5)',
        backdropFilter: "blur(5px)",
        borderRadius: 5,
        fontWeight: 'bold',
        paddingHorizontal: '1em',
        paddingVertical: '.5em',
    },
    img:{
      width: 100,
      height: 100,
      margin: '1em'
  }
  });

// export default Home