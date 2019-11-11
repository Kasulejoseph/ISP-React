import { TODO } from './type';

export const myTodo = (payload) => function (dispatch) {
  dispatch({
    type: TODO,
    payload,
  });
};
