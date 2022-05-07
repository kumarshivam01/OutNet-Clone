
// action type for login 
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE";

//action creator
export const loginLoading=()=>({
type:LOGIN_LOADING
});

export const loginSuccess=(payload)=>({
    type:LOGIN_SUCCESS,
    payload
});

export const loginfailure=()=>({
    type:LOGIN_FAILURE
});
