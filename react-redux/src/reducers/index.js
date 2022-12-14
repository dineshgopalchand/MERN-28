import counter from "./counterReducer";
import auth from "./authReducer";
import { combineReducers } from "redux";
const appReducers = combineReducers({
    counter,
    auth
});
export default appReducers;