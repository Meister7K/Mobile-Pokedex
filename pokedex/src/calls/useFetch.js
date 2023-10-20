import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch =(input, query)=>{
    const [data, setData] = useState();
    const [loading, setLoading]= useState(false);
    const [error, setError] = useState(null);
    // const [input, setInput] = useState();

const options = {
    method:'GET',
    url: `https://pokeapi.co/api/v2/pokemon/${input}`,
    params:{...query},
}
   

      const fetchData = async ()=>{
        setLoading(true)

        try{
            const res = await axios.request(options);
            setData(res.data.data);
            setLoading(false)
        }
        catch(error){
            setError(error);
            console.log(error)
        }
        finally{
            setLoading(false)
        }

      }


 useEffect(() => {
        fetchData()
      }, []);



      return {loading, error, data};
}