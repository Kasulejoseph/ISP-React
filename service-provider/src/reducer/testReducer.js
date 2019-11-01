import {ISP, SINGLEISP } from '../actions/type'

const initialSate = {
    responseData: [],
    singleList: []
}
export default (state=initialSate, action) => {
    switch (action.type) {
        case SINGLEISP:
            return {...state, singleList: action.payload } 
        case ISP:
            return {...state, responseData: action.payload }   
        default:
           return state
    }
}