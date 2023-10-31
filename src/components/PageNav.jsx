import React from 'react'
import styles from './PageNav.module.css';

import { NavLink } from 'react-router-dom'
import Logo from './../components/Logo'



export default function PageNav() {
    return <nav className={styles.nav} >
        <Logo />
        <ul>
            <li><NavLink to='/' >Home</NavLink></li>
            <li><NavLink to='/pricing' >Pricing</NavLink></li>
            <li><NavLink to='/product' >Product</NavLink></li>
            <li><NavLink to='/login' className={styles.ctaLink} >Login</NavLink></li>
        </ul>
    </nav>
}