
import { FETCH_ADDRESS_FAILURE, FETCH_ADDRESS_REQUEST, FETCH_ADDRESS_SUCCESS } from "./ActionType";

const initialState = {
  loading: false,
  address: [],
  error: null,
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADDRESS_REQUEST:
      return {...state, loading: true,error: null};
    case FETCH_ADDRESS_SUCCESS:
      return {...state,  address: action.payload,loading: false};
    case FETCH_ADDRESS_FAILURE:
      return { ...state,loading: false, error: action.payload};
    default:
      return state;
  }
};

export default addressReducer;
