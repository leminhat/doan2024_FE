import { api } from "../../../config/apiConfig";
import {
  CONFIRMED_ORDER_FAILURE,
  CONFIRMED_ORDER_REQUEST,
  CONFIRMED_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELIVERED_ORDER_FAILURE,
  DELIVERED_ORDER_REQUEST,
  DELIVERED_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  SHIP_ORDER_FAILURE,
  SHIP_ORDER_REQUEST,
  SHIP_ORDER_SUCCESS,
} from "./ActionType";

export const getOrders = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ORDER_REQUEST });
    try {
      const response = await api.get(`/api/admin/order`);
      dispatch({ type: GET_ORDER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ORDER_FAILURE, payload: error.massage });
    }
  };
};

export const confirmOrder = (orderId) => async (dispatch) => {
  dispatch({ type: CONFIRMED_ORDER_REQUEST });
  try {
    const response = await api.put(`/api/admin/order/${orderId}/confirmed`);
    const data = response.data;
    dispatch({ type: CONFIRMED_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CONFIRMED_ORDER_FAILURE, payload: error.massage });
  }
};

export const shipOrder = (orderId) => {
  return async (dispatch) => {
    dispatch({ type: SHIP_ORDER_REQUEST });
    try {
      const { data } = await api.put(`/api/admin/order/${orderId}/ship`);
      dispatch({ type: SHIP_ORDER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SHIP_ORDER_FAILURE, payload: error.massage });
    }
  };
};

export const deliveredOrder = (orderId) => async (dispatch) => {
  dispatch({ type: DELIVERED_ORDER_REQUEST });
  try {
    const response = await api.put(`/api/admin/order/${orderId}/deliver`);
    const data = response.data;
    dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELIVERED_ORDER_FAILURE, payload: error.massage });
  }
};

// export const cancelOrder = (orderId) => async (dispatch) => {
//   dispatch({ type: CANCELED_ORDER_REQUEST });
//   try {
//     const response = await api.put(`/api/admin/order/${orderId}/cancel`);
//     const data = response.data;
//     dispatch({ type: CANCELED_ORDER_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: CANCELED_ORDER_FAILURE, payload: error.massage });
//   }
// };

export const deleteOrder = (orderId) => async (dispatch) => {
  dispatch({ type: DELETE_ORDER_REQUEST });
  try {
    const { data } = await api.put(`/api/admin/order/${orderId}/delete`);
    dispatch({ type: DELETE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_ORDER_FAILURE, payload: error.massage });
  }
};