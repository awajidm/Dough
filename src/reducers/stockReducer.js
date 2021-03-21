import {
  ALL_STOCK_REQUEST,
  ALL_STOCK_SUCCESS,
  ALL_STOCK_FAIL,
  STOCK_DETAILS_REQUEST,
  STOCK_DETAILS_SUCCESS,
  STOCK_DETAILS_FAIL,
  CLEAR_ERROR,
} from "../constants/stockConstants";

export const stockReducer = (state = { stock: [] }, action) => {
  switch (action.type) {
    case ALL_STOCK_REQUEST:
      return {
        loading: true,
        stock: [],
      };
    case ALL_STOCK_SUCCESS:
      return {
        loading: false,
        stock: action.payload.data,
      };
    case ALL_STOCK_FAIL:
      return {
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
