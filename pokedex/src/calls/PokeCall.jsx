import React, { useState, useEffect } from 'react'

export const PokeCall=( pokemon) =>{

    const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pokeData, setPokeData] = useState([])//!check
  const search = pokemon.toLowerCase();


  const fetchData = async()=>{
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        const data = await res.json()
        setPokeData(data)
    } 
    catch(err){
        setError('could not fetch pokemon data')
    }
    finally{
        setLoading(false)
        console.log(pokeData)
    }
  }

//   useEffect(()=>{
//     (async()=>{

//     })
//   })


    return [loading, error, pokeData]
}