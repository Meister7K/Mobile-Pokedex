import { Platform, StyleSheet, Text, View, useColorScheme, ScrollView, SafeAreaView, TextInput, Pressable } from 'react-native'; //StatusBar
import React,{ useState} from 'react'
import { PokeCall } from '../calls/PokeCall';
import { useState } from 'react';

export const Search = ({navigation}) => {

    const [input, setInput] = useState();

    //! const getInput=()



    return (
        <>
        <View style={styles.container}>
           <Text>Search a Pokename or #</Text>
            <TextInput style={styles.input} placeholder='ex. pikachu/25'></TextInput>
            <Pressable  style={styles.button} title='Search' onPress={() => navigation.navigate('PokePage')}>Search</Pressable> 
        </View>  
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    button:{
        backgroundColor: 'rgba(255,255,255, 0.5)',
        backdropFilter: "blur(5px)",
        borderRadius: 5,
        fontWeight: 'bold',
        paddingHorizontal: '1em',
        paddingVertical: '.5em',
    },
    input:{
        backgroundColor: 'white',
        margin: '1em'
    }
})