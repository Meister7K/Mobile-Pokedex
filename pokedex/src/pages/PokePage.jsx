import { Platform, StyleSheet, Text, View, useColorScheme, ScrollView, SafeAreaView, TextInput, Button, Pressable, Image } from 'react-native'; //StatusBar
import * as React from 'react'
 import Img from '../../assets/pokeball.svg'
 import { MyBtn } from '../components/MyBtn';

export const PokePage=()=>{

    console.log(PokePage)



    return (
        <SafeAreaView>
        <ScrollView>
           <View style={styles.container}>
            <MyBtn onPress={()=> navigation.goBack()} buttonText={'back'}>
            </MyBtn>
            <Text>PokePage</Text>
            {/* <Text>{data}</Text> */}
            <Image source={Img} style={styles.img} />
        
        </View>  
        </ScrollView>
       
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    img:{
        flex: 1,
        width: 100,
        height: 100,
    },
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',

    }
})