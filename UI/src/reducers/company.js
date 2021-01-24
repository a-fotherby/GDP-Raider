import {COMPANIES_STORE, GET_COMPANIES, SET_COMPANIES_LOADING, SET_COMPANIES_SELECTED} from "../constants/const";

const companyReducer = (state = COMPANIES_STORE, action) => {
    switch(action.type) {
        case GET_COMPANIES:
            return {...state, loading: false, companies: action.payload
                };
        case SET_COMPANIES_LOADING:
            return {...state, loading: true};
        case SET_COMPANIES_SELECTED:
            return {...state, selected: action.payload}
        default:
            return state;
    }
};

export default companyReducer;