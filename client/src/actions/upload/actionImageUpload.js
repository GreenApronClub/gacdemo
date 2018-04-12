import * as types from '../actionTypes';

export function selectedImage(imageData) {
  return {
    type: types.UPLOAD_IMAGE,
    payload: imageData
  };
}
