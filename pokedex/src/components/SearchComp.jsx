import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, TextInput, Button, StyleSheet, navigate, Text, ActivityIndicator, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { MyBtn } from './MyBtn';
import { PokeCall } from '../calls/PokeCall';
import { useNavigation } from '@react-navigation/native';
import { useFetch } from '../calls/useFetch';

export const SearchComp = () =>{
    const navigation = useNavigation()

    const [input, setInput] = useState()
    const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [pokeData, setPokeData] = useState()
  const [moves, setMoves] = useState([])
  const [stats, setStats] = useState([])

  useEffect(() => {
   let moveArr = [];
   let statArr = [];

    if (pokeData) {
      console.log('pokeData updated:', pokeData);
      for (let i = 0; i < pokeData.moves.length; i++) {
        moveArr.push(pokeData.moves[i])
    }
    for (let i = 0; i < pokeData.stats.length; i++) {
        statArr.push(pokeData.stats[i])
    }

    const str = pokeData.name;
    const pName = str.replace(/[^a-zA-Z0-9 ]/g, '');
      
    //   navigation.navigate('PokePage', {pokeData})
    }
    setMoves(moveArr)
    setStats(statArr)

  }, [pokeData]);

  const handleLink=()=>{
    Linking.openURL(`https://www.serebii.net/pokemon/${pokeData.name.replace(/[^a-zA-Z0-9 ]/g, '')}/`)
  }
  

    const handleSearch= async(e)=>{

        e.preventDefault();
        setError(false);
        setLoading(true);
         const search = input.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
        
        try{
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
            const data = await res.json() 
            setPokeData(data);
            console.log(pokeData);
            
        } 
        catch(err){
            setError('could not fetch pokemon data')
        }
        finally{
            setLoading(false)
            
        }
      }

    return(
        <>
        <ScrollView >
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder='pikachu or 25' value={input} onChangeText={text => setInput(text)}/>
            <MyBtn buttonText={'Search'} onPress={handleSearch}/>

            {loading ? <ActivityIndicator size={'large'}/>:''}
            { error ? <Text>{error}</Text> : ''}
             {pokeData ? (<>
             <TouchableOpacity onPress={handleLink}>
                <Text>{pokeData.name}</Text>
            </TouchableOpacity>
             
             <Image style={styles.img} source={pokeData.sprites.other["official-artwork"].front_default}/>
             <Image style={styles.img} source={pokeData.sprites.other["official-artwork"].front_shiny}/>
             <Text>Type(s): {`${pokeData.types[0].type.name}`}{pokeData.types.length > 1 ? `/${pokeData.types[1].type.name}`: ''} </Text>
            
             <Text>Base Stats</Text>
             {stats.length > 0 ? <>
             {stats.map((stat, i)=>(<Text key={i}>{stat.stat.name.toUpperCase()}:{stat.base_stat}</Text>))}
             <Text>Total: {stats[0].base_stat + stats[1].base_stat + stats[2].base_stat + stats[3].base_stat + stats[4].base_stat + stats[5].base_stat}</Text>
             </>:''}
             

             <Text>Moves</Text>
             {moves.length > 0 ? <>
                {moves.sort((a,b)=> a.move.name.localeCompare( b.move.name)).map((move, i) => (
                                        <Text key={i}>{move.move.name}:  {move.version_group_details[0].move_learn_method.name !== 'machine' ? `Level ${move.version_group_details[0].level_learned_at}` : 'TM'}</Text>
                                    ))}
             </>:''}
             

            </>) : ''}

        </View>
        </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    textInput:{
        backgroundColor: 'white',
        borderRadius: 2,
        border: '2px inset white',
        padding: 5,
    },
    img:{
        width: 100,
        height: 100,
        margin: '1em'
    },
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100dvw',
      },
})