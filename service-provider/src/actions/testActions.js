import { TODO } from './type'
export const myTodo = (payload) => {
    return function(dispatch) {
        dispatch({
            type: TODO,
            payload
        })
    }
}