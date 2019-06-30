import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('http://localhost:5000/api/current_user', { withCredentials: true });

  dispatch({ type: FETCH_USER, payload: res.data });
};
