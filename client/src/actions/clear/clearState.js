import * as types from '../actionTypes';

export function clearAlert() {
  console.log("reached")
  return {
    type: types.CLEAR_ALERT
  };
}
