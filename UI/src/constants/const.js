export const BASE_URL = "";
export const GET_COMPANIES_URL = BASE_URL+"/api/get-companies";
export const GET_PROFILE_URL = BASE_URL+"/api/get-company";
export const POST_DATA_REQEUST = BASE_URL+"/api/send-request";

export const PRODUCTION = true;

export const PASSIVE = "PASSIVE";
export const PENDING = "PENDING";
export const CONFIRMED = "CONFIRMED";
export const PROBLEM = "PROBLEM";

export const DEFAULT_COMPANIES = [
    {url: "google.com", id: "ggl1"},
    {url: "facebook.com", id: "ffb2"},
    {url: "amazon.com", id: "amz3"},
    {url: "microsoft.com", id: "msft4"}];

export const DEFAULT_PROFILE = {
    id: "ggl1",
    url: "www.facebook.com",
    status: PENDING,
    last_comm: "17/01/2021",
    data: `|- about_you
|   |- friends_peer_group
|   |- messenger
|   |- notifications
|   |- preferences
|   |- viewed
|   |- visited
|   |- your address book
|
|- accounts_center
|- ads_and_businesses
|   |- ads_interests
|   |- advertisers_who_uploaded_a_contact_list_with_your_information
|   |- advertisers_you've_interacted_with
|   |- your_off-facebook_activity
|
+- apps_and_websites
+- archive
+- comments
+- events
+- facebook_gaming
+- following_and_followers
+- friends
+- groups
+- interactions
+- likes_and_reactions
+- location
+- marketplace
+- messages
+- other_activity
+- pages
+- payment_history
+- photos_and_videos
+- posts
+- profile_information
+- rewards
+- saved_items_and_collections
+- search_history
+- security_and_login_information
+- short_videos
+- stories
+- trash
+- voice_recordings_and_transcription
+- your_places
+- your_topics`,
    interaction: [
        {
            type: "data request",
            msg: `Dear Sir or Madam

I, Jan Helmich, would like to make a request for access to my data belonging to account associated to
jan.helmich@gmx.de.
Please supply the personal data you hold about me, which I am entitled to receive under data protection law.
If you need any more information, please let me know as soon as possible.
I would like to receive the data in electronic format, preferably as JSON files. Furthermore, I would like to request
all communication to go via this email address.
It may be helpful for you to know that data protection law requires you to respond to a request for personal data within one calendar month.
If you do not normally deal with these requests, please pass this letter to your data protection officer or relevant staff member.
If you need advice on dealing with this request, the Information Commissioner’s Office can assist you. Its website is ico.org.uk, or it can be contacted on 0303 123 1113.

Yours faithfully
Jan Helmich`,
            date: "15/01/2021",
        },
        {
            type: "data response",
            msg: `Generic response as to why they unfortunately are unable to fulfill my request to inspect all data.

    Facebook says that GDPR requires their response to use clear language.
    This means that their response should be understandable by the "average person".
    But they consider their data is too complex for that average person.
    Hence, they feel they are not obliged to give any data.

Yours Faithfully
Mark Zuckerberg
`,
            date: "16/01/2021",
        },
        {
            type: "delete request",
            msg: `Dear Sir or Madam

I, Jan Helmich, would like to make a request for the erasure of my data belonging to account associated to
jan.helmich@gmx.de.

I would kindly like to request the erasure of all associated data.

I confirm that I have read and understood the terms of this subject access form and certify that the information given in this application to Facebook is true. I understand that it is necessary for Facebook to confirm my/the data subject’s identity and it may be necessary to obtain more detailed information in order to locate the correct personal data.

Signed: Jan Helmich Date: 24.01.2021`,
            date: "24/01/2021",
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
