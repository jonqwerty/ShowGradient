import React from 'react'  
import s from '../pages/new/NewGradientPage.module.css'


const Form = ({hexOne, hexTwo, handleSubmit, handleChangeHexOne, handleChangeHexTwo}) => {

   
    return (
        <div>
           
            <form onSubmit={handleSubmit}>
                <input title="hexOne" type="text" value={hexOne} onChange={handleChangeHexOne} />
                <input title="hexTwo" type="text" value={hexTwo} onChange={handleChangeHexTwo}/>

            {
                hexOne.match(/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/) && hexTwo.match(/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/)
                ?<input data-testid="b" className={s.but} type="submit" value='Add Gradient' />  
                :<input data-testid="b" className={s.but} type="submit" value='Add Gradient'disabled />
            }
            </form> 
         
        </div>
    )
}

export default Form