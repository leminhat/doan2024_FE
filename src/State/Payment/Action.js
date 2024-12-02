import { api } from "../../config/apiConfig";
import {
  CREATE_PAYMENT_FAILURE,
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
} from "./ActionType";


export const createPayment = (reqData) => async (dispatch) => {
  console.log(reqData)
  dispatch({ type: CREATE_PAYMENT_REQUEST });
  try {
    const { data } = await api.post(`/api/payments/create_payment`, reqData);
    console.log(data)

    if (data) {
      window.location.href = data;
    }
  } catch (error) {
    dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
  }
};

export const updatePayment = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_PAYMENT_REQUEST });
  // console.log(reqData.params)
  try {
    console.log(reqData.params)
    const { data } = await api.post(`/api/payments/update?order_id=${reqData.orderId}`,reqData.params);
    console.log(data)
    console.log("thanh cong")
    
  } catch (error) {
    console.log("loi", error.message)
    dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message });
  }
};

export const PaymentSucess = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_PAYMENT_SUCCESS });
  try {
    const { data } = await api.post(`/api/payments/${reqData.orderId}`, reqData);

    if (data.payment_link_url) {
      window.location.href = data.payment_link_url;
    }
  } catch (error) {
    dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
  }
};
