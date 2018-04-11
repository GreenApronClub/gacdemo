import * as types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function(state = initialState.loginData, action) {
  switch (action.type) {
    case types.LOGIN_ERROR:
      return Object.assign({}, state, {
        errorMessage: action.payload.msg
      });
    case types.IS_LOGGED_IN:
      return Object.assign({}, state, {
        isLoggedIn: action.payload
      });
    case types.LOG_OUT:
      return Object.assign({}, state, {
        isLoggedIn: action.payload
      });
    default:
      return state
  }
}
