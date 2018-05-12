import * as types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function(state = initialState.signUp, action) {
  switch (action.type) {
    case types.SIGN_UP_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    case types.SIGN_UP_SUCCESS:
      return Object.assign({}, state, {
        success: action.payload
      });
    default:
      return state
  }
}
