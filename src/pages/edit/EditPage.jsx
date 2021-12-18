import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editSomeGradient } from '../../redux/app-reduser'
import {  Navigate,  useParams } from 'react-router-dom'
import Form from '../../components/Form'



const EditPage = () => {

    const gradients = useSelector((state) => { return state.app.gradients})

    const dispatch = useDispatch()

    const[id, setId] = useState('')
    const[hexOne, setHexOne] = useState('')
    const[hexTwo, setHexTwo] = useState('')
    
    const[validation, setValidation] = useState(false)
   
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
              
                dispatch(editSomeGradient(id, gradient) )
        
                setValidation(true)
            }

    const params = useParams()
            console.log(params)
    
    useEffect(() => {
        //debugger
        const id = params.id
        console.log(id)
        setId(id)    
        const item = gradients.find(item => item.id === id)
        setHexOne(item.hexOne)
        setHexTwo(item.hexTwo)

    },[])
    

    
    { if (validation) {
        return <Navigate to='/home' />
    } 
    return(
        // <div>
        //     <form onSubmit={handleSubmit}>
        //         <input title="hexOne" type="text" value = {hexOne} onChange={handleChangeHexOne}/>
        //         <input title="hexTwo" type="text" value = {hexTwo} onChange={handleChangeHexTwo}/>

        //     {
        //         hexOne.match(/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/) && hexTwo.match(/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/)
        //         ?<input data-testid="b" className={s.but} type="submit" value='Edit Gradient' />  
        //         :<input data-testid="b" className={s.but} type="submit" value='Add Gradient'disabled />
        //     }
        //     </form>
           
        // </div>
        
        <Form hexOne={hexOne} hexTwo={hexTwo} handleChangeHexOne={handleChangeHexOne} handleChangeHexTwo={handleChangeHexTwo} handleSubmit={handleSubmit}   />

    )
    }
}

export default EditPage