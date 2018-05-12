import * as types from '../actionTypes';

export function signUpSuccess(data) {
  return {
    type: types.SIGN_UP_SUCCESS,
    payload: data
  };
}

export function signUpError(data) {
  return {
    type: types.SIGN_UP_ERROR,
    payload: data
  };
}


export function clearSignUpSuccessMessage(clear) {
  return {
    type: types.SIGN_UP_SUCCESS,
    payload: clear
  };
}

export function clearSignUpErrorMessage(clear) {
  return {
    type: types.SIGN_UP_ERROR,
    payload: clear
  };
}
