import axios from 'axios';
import * as types from '../actionTypes';

const ROOT_URL = "http://localhost:8080";

export function fetchStrains(values) {
  const request = axios.get(`${ROOT_URL}/manage/strains`);

  return (dispatch) => {
    request.then(response => {
      if(response.data) {
        dispatch({ type: types.FETCH_STRAIN_LIST, payload: response.data });
      }
    })
    .catch(error => {
      dispatch({ type: types.FETCH_STRAIN_LIST_ERROR, payload: error.response.data.message });
    })
  }
}
