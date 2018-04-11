import * as types from '../actionTypes';

export function sendErrorToReducers(error) {
  return {
    type: types.FETCH_STRAIN_LIST_ERROR,
    payload: error
  };
}
