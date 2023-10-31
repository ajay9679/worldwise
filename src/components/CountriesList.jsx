import React, { useContext } from 'react'
import styles from './CountryList.module.css'

import Spinner from './Spinner'
import CountryItem from './CountryItem'
import Message from './Message'
import { CitiesContext } from '../contexts/CitiesContext'


export default function CountryList(){
    const {cities,isLoading} = useContext(CitiesContext);
    if(isLoading) return <Spinner />
    if(!cities.length) return <Message message='Add your first city by clicking on the map.' />
    const countries = cities.reduce((arr,city) => {
        if(!arr.map(el => el.country).includes(city.country))
            return [...arr,{country:city.country,emoji:city.emoji}];
        else
            return arr;
    },[]);

    return <div className={styles.countryList} >
        {countries?.map(country => <CountryItem key={country.emoji} country={country} />)}
    </div>
}
