import axios from "axios";

import {
  TRANSFER_STOCK_REQUEST,
  TRANSFER_STOCK_SUCCESS,
  TRANSFER_STOCK_FAIL,
  CLEAR_ERROR,
} from "../constants/transferStockConstants";

export const transferStock = (
  sourceId,
  destinationId,
  productCode,
  qty
) => async (dispatch) => {
  try {
    dispatch({
      type: TRANSFER_STOCK_REQUEST,
    });

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/Stock/StockTransfer`,
      { sourceId, destinationId, productCode, qty },
      config
    );

    dispatch({
      type: TRANSFER_STOCK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TRANSFER_STOCK_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
