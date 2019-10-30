import { TODO } from '../actions/type'

const initialSate = {
    todo: []
}

export default (state=initialSate, action) => {
    switch (action.type) {
        case TODO:
            return {...state, todo: action.payload }    
        default:
           return state
    }
}