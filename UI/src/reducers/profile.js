import {GET_PROFILE, PROFILE_STORE, SET_PROFILE_LOADING, SET_TAB_SELECTED} from "../constants/const";

const profileReducer = (state = PROFILE_STORE, action) => {
    switch(action.type) {
        case GET_PROFILE:
            return {...state, loading: false, profile: action.payload
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