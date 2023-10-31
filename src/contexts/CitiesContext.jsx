import React, { createContext, useEffect, useState } from 'react'


const BASE_URL = `http://localhost:8000`;

export const CitiesContext = createContext();

export default function CitiesProvider({children}){
    const [cities,setCities] = useState([]);
    const [currentCity,setCurrentCity] = useState({});
    const [isLoading,setIsLoading] = useState(false);

    useEffect(function(){
        async function fetchCity(){
            try{
                setIsLoading(true);
                const res = await fetch(`${BASE_URL}/cities`);
                if(!res.ok) throw new Error('something went wrong');
                const data = await res.json();
                // console.log(data);
                setCities(data);
            }catch(err){
                console.error(err.message);
            }finally{
                setIsLoading(false);
            }
        }
        fetchCity();
    },[]);

    async function getCity(id){
        try{
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json();
            setCurrentCity(data);
        }catch(err){
            console.error(err.message)
        }finally{
            setIsLoading(false);
        }
    }

    async function createCity(newCity){
        try{
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities`,{
                method:'POST',
                body:JSON.stringify(newCity),
                headers:{
                    'Content-Type':'application/json',
                },
            });
            const data = await res.json();
            setCities(city => [...city,data]);
            console.log(data);
        }catch(err){
            console.error(err.message)
        }finally{
            setIsLoading(false);
        }
    }

    async function deleteCity(id){
        try{
            setIsLoading(true);
            await fetch(`${BASE_URL}/cities/${id}`,{
                method:'DELETE'
            });
            setCities(cities => cities.filter(city => city.id !== id));
        }catch(err){
            console.error(err.message);
        }finally{
            setIsLoading(false);
        }
    }

    return <CitiesContext.Provider value={{cities,isLoading,currentCity,getCity,createCity,deleteCity}} >{children}</CitiesContext.Provider>
}
