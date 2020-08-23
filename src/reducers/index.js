import { combineReducers } from "redux";
import articles from "./articles";
import loggins from "./loggins";
import { routerReducer } from "react-router-redux";


export default combineReducers({
    routing: routerReducer,
    articles,
    loggins    
})