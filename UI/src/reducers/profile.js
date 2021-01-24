import {GET_PROFILE, PROFILE_STORE, SET_PROFILE_LOADING, SET_TAB_SELECTED, DEFAULT_PROFILE} from "../constants/const";

const profileReducer = (state = PROFILE_STORE, action) => {
    switch(action.type) {
        case GET_PROFILE:
            return {...state, loading: false, profile: {...DEFAULT_PROFILE, name: action.payload.name, email: action.payload.email}
                };
        case SET_PROFILE_LOADING:
            return {...state, loading: true};
        case SET_TAB_SELECTED:
            return {...state, selected: action.payload}
        default:
            return state;
    }
};

export default profileReducer;
