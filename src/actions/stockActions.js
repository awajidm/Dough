import axios from "axios";

import {
  ALL_STOCK_REQUEST,
  ALL_STOCK_SUCCESS,
  ALL_STOCK_FAIL,
  STOCK_DETAILS_REQUEST,
  STOCK_DETAILS_SUCCESS,
  STOCK_DETAILS_FAIL,
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
