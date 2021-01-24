import {DEFAULT_COMPANIES, DEFAULT_PROFILE, GET_COMPANIES_URL, PRODUCTION, GET_PROFILE_URL, POST_DATA_REQEUST} from "../constants/const";
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

export function fetchProfile(setter, identifier) {
    setter(set_profile_loading());
      fetch(`${GET_PROFILE_URL}/${identifier}`)
          .then(resp => resp.json())
          .then((res) => {
              console.log(res);
              setter(get_profile(res));
          }).catch(function () {
          console.log("error");
          setter(get_profile(DEFAULT_PROFILE))
      });
}

export function postDataRequest(name, account, company){
  const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'GRP-Raider Data Request',
          name: name,
          account: account,
          company: company,
       })
    };
    fetch(POST_DATA_REQEUST, requestOptions)
        .then(response => response.json())
        .then(data => this.console.log(data))
        .catch(function () {
        console.log("error while posting data request");
      });
}
