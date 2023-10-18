import { Platform, StyleSheet, Text, View, useColorScheme, ScrollView, SafeAreaView, TextInput, Button, Pressable } from 'react-native'; //StatusBar
import * as React from 'react'

export const PokePage=({navigation}, props)=>{

    return (
        <>
        <ScrollView>
           <View>
            <Pressable onPress={()=> navigation.goBack()}>
                Back
            </Pressable>
            <Text>PokePage</Text>

            <Text>
                Title
            </Text>
            {/* <Image/> */}
            <Text>
                Stats /table
            </Text>
            <Text>
                evo line
            </Text>
            <Text>
                Moves
            </Text>
        </View>  
        </ScrollView>
       
        
        </>
    )
}