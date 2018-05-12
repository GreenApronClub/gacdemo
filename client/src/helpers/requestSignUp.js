import axios from 'axios';
import { ROOT_URL } from '../config/constants';

export default function requestSignUp(values) {
  const request = axios.post(`${ROOT_URL}/signup`, values);
    return request
}
