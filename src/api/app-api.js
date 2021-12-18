import * as axios from 'axios'



const instance = axios.create({
    baseURL: 'https://show-gradient-default-rtdb.firebaseio.com/'
})


export const gradientsAPI = {
    getGradients( )  {
        return instance.get('gradients.json')
        
    },

    addGradient(gradient) {
        return instance.post('gradients.json', gradient )
    },
    
    deleteGradient(id) {
        return instance.delete(`gradients/${id}.json`)
    },

    editGradient(id, gradient) {
        return instance.put(`gradients/${id}.json`, gradient)
    }
   
}  
