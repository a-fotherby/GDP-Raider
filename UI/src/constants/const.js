export const PRODUCTION = false;

export const PASSIVE = "PASSIVE";
export const PENDING = "PENDING";
export const CONFIRMED = "CONFIRMED";
export const PROBLEM = "PROBLEM";

export const DEFAULT_COMPANIES = [
    {url: "google.com", id:"ggl1"},
    {url: "facebook.com", id:"ffb2"},
    {url:"amazon.com", id:"amz3"},
    {url:"microsoft.com", id:"msft4"}];

export const DEFAULT_PROFILE = {
    id:"ggl1",
    url:"google.com",
    status:PENDING,
    last_comm: "17/01/2021",
    data: "{ \n usr='default' \n example data \n test \n }",
    interaction: [
        {
            iid: "req1",
            type: "data request",
            msg: "Email text here",
            date: "15/01/2021",
        },
        {
            iid: "req2",
            type: "data response",
            msg: "Email text here",
            date: "16/01/2021",
        },
        {
            iid: "req3",
            type: "delete request",
            msg: "Email text here",
            date: "17/01/2021",
        },
    ]
}

export const DATA_CATEGORIES_FACEBOOK = [
    {name: "about_you"},
    {name: "accounts_center"},
    {name: "ads_and_businesses"},
    {name: "apps_and_websites"},
    {name: "archive"},
    {name: "comments"},
    {name: "events"},
    {name: "facebook_gaming"},
    {name: "following_and_followers"},
    {name: "friends"},
    {name: "groups"},
    {name: "interactions"},
    {name: "likes_and_reactions"},
    {name: "location"},
    {name: "marketplace"},
    {name: "messages"},
    {name: "other_activity"},
    {name: "pages"},
    {name: "payment_history"},
    {name: "photos_and_videos"},
    {name: "posts"},
    {name: "profile_information"},
    {name: "rewards"},
    {name: "saved_items_and_collections"},
    {name: "search_history"},
    {name: "security_and_login_information"},
    {name: "short_videos"},
    {name: "stories"},
    {name: "trash"},
    {name: "voice_recordings_and_transcription"},
    {name: "your_places"},
    {name: "your_topics"},
]

export const COMPANIES_STORE = {loading: false, companies: [], selected: "Data"}

export const GET_COMPANIES = "GET_COMPANIES";
export const SET_COMPANIES_LOADING = "SET_COMPANIES";
export const SET_COMPANIES_SELECTED = "SET_COMPANIES_SELECTED";

export const PROFILE_STORE = {loading: false, profile: DEFAULT_PROFILE}

export const GET_PROFILE = "GET_PROFILE";
export const SET_PROFILE_LOADING = "SET_PROFILE_LOADING";
export const SET_TAB_SELECTED = "SET_TAB_SELECTED";