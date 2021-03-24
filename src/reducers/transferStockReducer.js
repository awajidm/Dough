import {
  TRANSFER_STOCK_REQUEST,
  TRANSFER_STOCK_SUCCESS,
  TRANSFER_STOCK_FAIL,
  CLEAR_ERROR,
} from "../constants/transferStockConstants";

export const transferStockReducer = (state = { transferStock: {} }, action) => {
  switch (action.type) {
    case TRANSFER_STOCK_REQUEST:
      return {
        loading: true,
        transferStock: {},
      };
    case TRANSFER_STOCK_SUCCESS:
      return {
        ...state,
        loading: false,
        transferStock: action.payload,
      };
    case TRANSFER_STOCK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
