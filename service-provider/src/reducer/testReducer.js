import { TODO, ISP } from '../actions/type'

const initialSate = {
    todo: [],
    responseData: []
}
export default (state=initialSate, action) => {
    switch (action.type) {
        case TODO:
            return {...state, todo: action.payload } 
        case ISP:
            return {...state, responseData: action.payload }   
        default:
           return state
    }
}