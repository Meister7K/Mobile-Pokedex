import { Platform, StyleSheet, Text, View, useColorScheme, ScrollView, SafeAreaView, TextInput, Button, Pressable, Image, TouchableOpacity } from 'react-native'; //StatusBar
import * as React from 'react'


export const MyBtn =({buttonText, onPress})=>{

    return(<>
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    </>)
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'darkRed',
        padding: 10,
        borderRadius: 10,
        margin: '.5em',
        border: '1px inset white',
        // flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        color: 'white',
        // flex:1,
        alignItems: 'center',
        justifyContent: 'center'

    }

})