import counter from "./counterReducer";
import authReducer from "./authReducer";
import todo from './todoReducer';
import { combineReducers } from "redux";
const appReducers = combineReducers({
    counter,
    auth: authReducer,
    todo
});
export default appReducers;