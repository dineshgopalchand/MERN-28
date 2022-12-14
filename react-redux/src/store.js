import { createStore } from "redux";
import appReducers from "./reducers/index";
//The created store
const store = createStore(
    appReducers
);
export default store;