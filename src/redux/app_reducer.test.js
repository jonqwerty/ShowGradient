import appReducer,  { actions }  from '../redux/app-reduser'

const gradients = [
    {'id': 1, 'hexOne': 'a', 'hexTwo': 's'},
    {'id': 2, 'hexOne': 'к', 'hexTwo': 'a'},
    {'id': 3, 'hexOne': 'м', 'hexTwo': 'f'}
]


let state = {
    gradients: []
}

test ('length of gradients should be 3', () => {
    let action = actions.setGradients(gradients)
            
    let newState = appReducer(state, action)

    expect(newState.gradients.length).toBe(3)
})

test ('length of gradients should be 0', () => {
    let action = actions.nullGradients()
            
    let newState = appReducer(state, action)

    expect(newState.gradients.length).toBe(0)
})