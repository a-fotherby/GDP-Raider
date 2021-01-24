import companyReducer from "./company";
import {combineReducers} from "redux";
import profileReducer from "./profile";

const reducers = combineReducers({
    company: companyReducer,
    profile: profileReducer,
});

export default reducers;