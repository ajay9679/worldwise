import React, { useContext } from 'react'
import styles from './CityItem.module.css'
import { Link } from 'react-router-dom';
import { CitiesContext } from '../contexts/CitiesContext';


const formatDate = date => new Intl.DateTimeFormat("en",{day: "numeric",month: "long",year: "numeric",weekday: "long"}).format(new Date(date));

export default function CityItem({...city}){
    const {currentCity,deleteCity} = useContext(CitiesContext);
    // console.log(currentCity)
    function handleDelete(e){
        e.preventDefault();
        deleteCity(city.id);
    }
    return <li >
        <Link className={`${currentCity.id === city.id ? styles['cityItem--active'] : ''} ${styles.cityItem}`} to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`} >
        <span className={styles.emoji} >{city.emoji}</span>
        <h3 className={styles.name} >{city.cityName}</h3>
        <time className={styles.date} >{formatDate(city.date)}</time>
        <button className={styles.deleteBtn} onClick={handleDelete} >&times;</button>
        </Link>
    </li>
}
