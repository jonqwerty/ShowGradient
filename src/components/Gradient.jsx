import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from '../pages/home/HomePage.module.css'
import { deleteSomeGradient } from '../redux/app-reduser'
import { useDispatch } from 'react-redux'


const Gradient = ({gradient}) => {
    let g = gradient
    console.log(g)
    
    const st = {
    
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundImage: `linear-gradient(to right, ${g.hexOne}, ${g.hexTwo})`,
      width: '50vw',
      height: '10vw',
      margin: '3vw auto'
    }

    const dispatch = useDispatch()

    const handleDelete = (e) => {
        e.preventDefault()
        const id =  e.target.value
        
        dispatch(deleteSomeGradient(id) )        
    }

    return(
        <div>
            <div className={s.container}>
                <div id="box"  style={st}>
                    <span  data-testid="hexOne">{g.hexOne}</span>
                    <span  data-testid="hexTwo">{g.hexTwo}</span>
                </div>
                <button data-testid="del-btn" className={s.buttonDelete} value = {g.id} onClick={handleDelete}>&#10060;</button>
                <NavLink to={'/edit/' + g.id} >
                    <button data-testid="edit-btn" className={s.buttonEdit} >&#9998;</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Gradient