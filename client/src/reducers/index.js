import {  combineReducers } from 'redux';
import SignUpReducer from './sign_up/reducerSignUp';
import SessionReducer from './login/session';
import StrainsReducer from './strains/reducerStrains';
import StrainReducer from './strains/reducerStrain';
import AddStrainReducer from './manage_strains/reducerAddStrain';
import EditStrainReducer from './manage_strains/reducerEditStrain';
import EditStrainPreviewReducer from './strains/reducerStrainPreview';
import RemoveStrainReducer from './manage_strains/reducerRemoveStrain';
import NavigationReducer from './navigation/reducer_navigation';
import ImageUploadReducer from './upload/reducerImageUpload';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  signUp: SignUpReducer,
  session: SessionReducer,
  route: NavigationReducer,
  strainList: StrainsReducer,
  specificStrain: StrainReducer,
  addStrain: AddStrainReducer,
  editStrain: EditStrainReducer,
  editStrainPreview: EditStrainPreviewReducer,
  removeStrain: RemoveStrainReducer,
  imageData: ImageUploadReducer,
  form: formReducer
});

export default rootReducer;
