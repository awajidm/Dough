import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { stockReducer } from "./reducers/stockReducer";
import { transferStockReducer } from "./reducers/transferStockReducer";

const reducer = combineReducers({
  stock: stockReducer,
  transferStock: transferStockReducer,
});

let intitialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  intitialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
