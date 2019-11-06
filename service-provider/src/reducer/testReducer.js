import { ISP, SINGLEISP, CREARTEISP } from '../actions/type';

const initialSate = {
  responseData: [],
  singleList: [],
  createResponseData: []
};
export default (state = initialSate, action) => {
  switch (action.type) {
    case SINGLEISP:
      return { ...state, singleList: action.payload };
    case ISP:
      return { ...state, responseData: action.payload };
    case CREARTEISP:
      return { ...state, createResponseData: action.payload };
    default:
      return state;
  }
};
