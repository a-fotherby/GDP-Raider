import {GET_COMPANIES, SET_COMPANIES_LOADING, SET_COMPANIES_SELECTED} from "../constants/const";


export const get_companies = (companies) => {
    return {
        type: GET_COMPANIES,
        payload: companies,
    }
}

export const set_companies_loading = () => {
    return {
        type: SET_COMPANIES_LOADING,
    };
}

export const set_companies_selected = (company) => {
    return {
        type: SET_COMPANIES_SELECTED,
        payload: company,
    }
}