import axios from 'axios';

import {
  ISP, DB_URL_HEROKU, ERROR, SINGLEISP, CREARTEISP,
} from './type';

export const ispAction = (payload, param) => async function (dispatch) {
  const DB_URL_To_Use = param ? `${DB_URL_HEROKU}?sort=${param.sort}&limit=3&skip=0` : `${DB_URL_HEROKU}?${payload}`;
  try {
    const response = await axios({
      url: DB_URL_To_Use,
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
      url: DB_URL_HEROKU + id,
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
  try {
    const response = await axios({
      url: DB_URL_HEROKU,
      method: 'POST',
      data,
    });
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
