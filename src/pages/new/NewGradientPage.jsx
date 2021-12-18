import React, {useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Form from '../../components/Form'
import { addNewGradient } from '../../redux/app-reduser'



const NewGradientPage = () => {
    const[hexOne, setHexOne] = useState('')
    const[hexTwo, setHexTwo] = useState('')
    const[validation, setValidation] = useState(false)

    const dispatch = useDispatch()

    
     const handleChangeHexOne = (e) => {
         setHexOne( e.target.value)
     }

     const handleChangeHexTwo = (e) => {
         setHexTwo( e.target.value)
     }

     const handleSubmit = (e) => {
             e.preventDefault()
             const gradient = {
                 hexOne, hexTwo
             }
              
             dispatch(addNewGradient(gradient) )
        
             setValidation(true)

             }
    
    
    { if (validation) {
        return <Navigate to='/home' />
    } 

    return(
        <div>
            <div style={{color:'black'}}>Hex-code should start with #</div>
            <div style={{color:'black'}}>Must contain 3 or 6 characters</div>
            <div style={{color:'black'}}>Valid characters: 0-9, a-f, A-F</div>

            {/* <form onSubmit={handleSubmit}>
                <input title="hexOne" type="text"  onChange={handleChangeHexOne} />
                <input title="hexTwo" type="text"  onChange={handleChangeHexTwo}/>

            {
                hexOne.match(/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/) && hexTwo.match(/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/)
                ?<input data-testid="b" className={s.but} type="submit" value='Add Gradient' />  
                :<input data-testid="b" className={s.but} type="submit" value='Add Gradient'disabled />
            }
            </form> */}

            <Form hexOne={hexOne} hexTwo={hexTwo} handleChangeHexOne={handleChangeHexOne} handleChangeHexTwo={handleChangeHexTwo} handleSubmit={handleSubmit}   />
           
        </div>
    )
    }
}


export default NewGradientPage