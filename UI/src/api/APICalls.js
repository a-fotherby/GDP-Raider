import {DEFAULT_COMPANIES, DEFAULT_PROFILE, GET_COMPANIES_URL, PRODUCTION} from "../constants/const";
import {get_companies, set_companies_loading} from "../actions/companiesActions";
import {get_profile, set_profile_loading} from "../actions/profileActions";


export function fetchCompanies(setter) {
    setter(set_companies_loading());
    fetch(`${GET_COMPANIES_URL}`)
        .then(resp => resp.json())
        .then((res) => {
            console.log(res);
            setter(get_companies(res));
        }).catch(function () {
        console.log("error");
        setter(get_companies(DEFAULT_COMPANIES))
    });
}

export function fetchProfile(setter) {
    setter(set_profile_loading());
    if (PRODUCTION) {
        // API CALL HERE
    } else {
        setter(get_profile(DEFAULT_PROFILE))
    }
}