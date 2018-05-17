import axios from 'axios';
import * as types from '../actionTypes';
import { ROOT_URL } from '../../config/constants.js';

export var IsLoggedIn = false;

export function requestLogin(values, props) {
  const request = axios.post(`${ROOT_URL}/login`, values)

  return (dispatch) => {
    request.then(response => {
      sessionStorage.setItem('jwt', response.data.token);
      if(response.data.isLoggedIn === true && sessionStorage.getItem('jwt')) {
        dispatch({ type: types.IS_LOGGED_IN, payload: response.data.isLoggedIn });
        props.history.push('/active-orders');
      }
    })
    .catch(error => {
      dispatch({ type: types.LOGIN_ERROR, payload: error.response.data });
    })
  }
}
