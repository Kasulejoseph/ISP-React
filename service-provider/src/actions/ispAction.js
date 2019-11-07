import axios from 'axios';

import {
  ISP, DB_URL, ERROR, SINGLEISP, CREARTEISP
} from './type';

export const ispAction = (payload, param) => async function (dispatch) {  
  const DB_URL_To_Use = param ? DB_URL + `?sort=${param.sort}` : DB_URL
  try {
    const response = await axios({
      url: DB_URL_To_Use,
      data: payload,
    });
    dispatch({
      type: ISP,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};

export const getIspAction = (id) => async function (dispatch) {
  try {
    const response = await axios({
      url: DB_URL + id,
    });

    dispatch({
      type: SINGLEISP,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};

export const addIspAction = (data) => async function (dispatch) {
  console.log('--->', data);
  
  try {
    const response = await axios({
      url: DB_URL,
      method: 'POST',
      data
    });
    console.log(response);
    
    dispatch({
      type: CREARTEISP,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};
