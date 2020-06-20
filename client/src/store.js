import { createStore, applyMiddleware } from "redux"; // middleware b/c we are using `redux-thunk`
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk]; // array of middleware; in this case, only one

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
