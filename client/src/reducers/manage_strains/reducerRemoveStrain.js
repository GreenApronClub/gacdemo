import * as types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function(state = initialState.removeStrain, action) {
  switch (action.type) {
    case types.REMOVE_STRAIN_ERROR:
      return Object.assign({}, state, {
        errorMessage: action.payload
      });
    case types.REMOVE_STRAIN:
      return Object.assign({}, state, {
        success: action.payload
      });
    default:
      return state
  }
}
