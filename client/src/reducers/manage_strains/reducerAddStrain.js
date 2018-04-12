import * as types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function(state = initialState.addStrain, action) {
  switch (action.type) {
    case types.ADD_STRAIN_ERROR:
      return Object.assign({}, state, {
        errorMessage: action.payload
      });
    case types.ADD_STRAIN:
      return Object.assign({}, state, {
        successMessage: action.payload
      });
    default:
      return state
  }
}
