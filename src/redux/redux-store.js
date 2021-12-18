import { applyMiddleware, combineReducers, createStore } from "redux"
import  thunkMiddleware from 'redux-thunk'
import appReducer from "./app-reduser"


let reducers = combineReducers({
 app: appReducer
 
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store