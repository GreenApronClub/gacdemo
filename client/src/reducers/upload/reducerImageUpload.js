import * as types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function(state = initialState.imageUpload, action) {
  switch (action.type) {
    case types.UPLOAD_IMAGE:
      return Object.assign({}, state, {
        imageSrc: action.payload.image, imageName: action.payload.name
      });
    default:
      return state
  }
}
