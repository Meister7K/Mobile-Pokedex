import { Platform, StyleSheet, Text, View, useColorScheme, ScrollView, SafeAreaView, TextInput, Pressable, Button } from 'react-native'; //StatusBar
import React,{ useState, useNavigation} from 'react'
import { PokeCall } from '../calls/PokeCall';
import { SearchComp } from '../components/SearchComp';
// import { useState } from 'react';

export const Search = () => {

    const [input, setInput] = useState();


    return (
        <>
        <SafeAreaView style={styles.container}>
           <Text>Search a Pokename or #</Text>
           <SearchComp/>


        </SafeAreaView>  
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