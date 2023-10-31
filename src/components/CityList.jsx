import React, { useContext } from 'react'
import styles from './CityList.module.css'

import Spinner from './Spinner'
import CityItem from './CityItem'
import Message from './Message'
import { CitiesContext } from '../contexts/CitiesContext'


export default function CityList(){
    const {cities,isLoading} = useContext(CitiesContext);
    if(isLoading) return <Spinner />
    if(!cities.length) return <Message message='Add your first city by clicking on the map.' />

    return <div className={styles.cityList} >
        {cities?.map(city => <CityItem key={city.id} {...city} />)}
    </div>
}
