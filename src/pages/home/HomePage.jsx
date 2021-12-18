import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Gradient from '../../components/Gradient'
import { requestGradients } from '../../redux/app-reduser'



const HomePage = () => {
    
    const gradients = useSelector((state) => { return state.app.gradients})

    const dispatch = useDispatch()

    useEffect(() => {
      
        dispatch(requestGradients())
       
    }, []) 

    

   if (gradients.length !==0 ) {
    return (
        <div data-testid="list">
        {
         gradients.map(g => <Gradient gradient={g} key={g.id} />)
        } 
        </div>
    )
    } else {
       return (
           <div style={{color:'white'}} >There are no examples of gradients yet. You can be the first to add your gradient.</div>
       )
    }   
}

export default HomePage