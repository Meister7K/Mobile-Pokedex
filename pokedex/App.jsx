import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, useColorScheme, ScrollView, SafeAreaView, TextInput, Button } from 'react-native'; //StatusBar
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import type { Node } from 'react'
import {Home} from './src/pages/Home';
import {Search} from './src/pages/Search'


const Stack = createNativeStackNavigator();

export default function App() {


  // const

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name='Home' component={Home} options={{title: ''}} />
        <Stack.Screen name='Search' component={Search}/>
      </Stack.Navigator>
      {/* <Home/> */}
    </NavigationContainer>
        
    </>
  );
}

