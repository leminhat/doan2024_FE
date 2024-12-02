
import axios from 'axios';

import { api } from '../../config/apiConfig';
import { FETCH_ADDRESS_FAILURE, FETCH_ADDRESS_REQUEST, FETCH_ADDRESS_SUCCESS } from './ActionType';

export const getAddress = () => async (dispatch) => {
  dispatch({ type: FETCH_ADDRESS_REQUEST });

  try {
    const {data} = await api.get(`/api/users/address`); 
    
    dispatch({
      type: FETCH_ADDRESS_SUCCESS,
      payload: data,  // Dữ liệu từ backend trả về
    });
  } catch (error) {
    dispatch({
      type: FETCH_ADDRESS_FAILURE,
      payload: error.message,
    });
  }
};
