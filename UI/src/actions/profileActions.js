import {GET_COMPANIES, SET_COMPANIES_SELECTED, SET_PROFILE_LOADING, SET_TAB_SELECTED} from "../constants/const";


export const get_profile = (profile) => {
    return {
        type: GET_COMPANIES,
        payload: profile,
    }
}

export const set_profile_loading = () => {
    return {
        type: SET_PROFILE_LOADING,
    };
}

export const set_tab_selected = (tab) => {
    return {
        type: SET_TAB_SELECTED,
        payload: tab,
    }
}