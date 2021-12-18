import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = () => {

    return (
        <header className={s.header}>
            <div className={s.item}>
                <p>Show Gradient</p>
            </div>
            <div className ={s.link}>
                <div className={s.item} >
                    <NavLink className={ ({isActive}) => isActive ? s.active : ''} to='/home' >Home Page</NavLink>
                </div>
                <div className={s.item} >
                    <NavLink className={ ({isActive}) => isActive ? s.active : ''} to='/new' >New Gradient</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header