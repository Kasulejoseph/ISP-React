import axios from 'axios';

import {
  ISP, DB_URL, ERROR, SINGLEISP,
} from './type';

export const ispAction = (payload) => async function (dispatch) {
  try {
    const response = await axios({
      url: DB_URL,
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
