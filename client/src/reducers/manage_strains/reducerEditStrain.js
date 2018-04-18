import * as types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function(state = initialState.editStrain, action) {
  switch (action.type) {
    case types.EDIT_STRAIN_ERROR:
      return Object.assign({}, state, {
        errorMessage: action.payload
      });
    case types.EDIT_STRAIN:
      return Object.assign({}, state, {
        success: action.payload
      });
    default:
      return state
  }
}
