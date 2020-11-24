import { combineReducers } from "redux";
import counterReducer from "./counter"
import loggedReducer from "./isLogged";

const rootReducer = combineReducers({
    counter: counterReducer,
    logged: loggedReducer,
})

export default rootReducer;