import {DEFAULT_COMPANIES, DEFAULT_PROFILE, PRODUCTION} from "../constants/const";
import {get_companies, set_companies_loading} from "../actions/companiesActions";
import {get_profile} from "../actions/profileActions";


export function fetchCompanies(setter) {
    setter(set_companies_loading());
    if (PRODUCTION) {
        // API CALL HERE
    } else {
        setter(get_companies(DEFAULT_COMPANIES))
    }
}

export function fetchProfile(setter) {
    setter(set_companies_loading());
    if (PRODUCTION) {
        // API CALL HERE
    } else {
        setter(get_profile(DEFAULT_PROFILE))
    }
}