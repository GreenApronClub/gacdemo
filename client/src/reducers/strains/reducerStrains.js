import * as types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function(state = initialState.strainList, action) {
  switch (action.type) {
    case types.FETCH_STRAIN_LIST_ERROR:
      return Object.assign({}, state, {
        errorMessage: action.payload.msg
      });
    case types.FETCH_STRAIN_LIST:
      return Object.assign({}, state, {
        strains: action.payload
      });
    default:
      return state
  }
}
