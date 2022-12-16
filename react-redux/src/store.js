import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import appReducers from "./reducers/index";
//The created store
const store = createStore(
    appReducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    applyMiddleware(thunk)
);
export default store;