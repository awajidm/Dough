import axios from "axios";

import {
  ALL_STOCK_REQUEST,
  ALL_STOCK_SUCCESS,
  ALL_STOCK_FAIL,
  CLEAR_ERROR,
} from "../constants/stockConstants";

export const getStocks = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_STOCK_REQUEST,
    });

    const { data } = await axios.get(`/api/Stock/GetStockDetails`);

    dispatch({
      type: ALL_STOCK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_STOCK_FAIL,
      payload: "error",
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
