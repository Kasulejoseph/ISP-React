import axios from 'axios'

import { ISP, DB_URL, ERROR } from './type'

export const ispAction = (payload) => {
    return async function(dispatch) {
        try {
            const response = await axios({
                url: DB_URL,
                data: payload
            }) 
            dispatch({
                type: ISP,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }
    }
}