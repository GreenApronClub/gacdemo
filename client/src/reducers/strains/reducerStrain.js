import * as types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function(state = initialState.strain, action) {
  switch (action.type) {
    case types.FETCH_STRAIN_ERROR:
      return Object.assign({}, state, {
        errorMessage: action.payload
      });
    case types.FETCH_STRAIN:
      return Object.assign({}, state, {
        strainData: action.payload
      });
    default:
      return state
  }
}
