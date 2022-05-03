
// action type for login 
export const SIGNUP_LOADING = "SIGNUP_LOADING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

//action creator
export const signupLoading=()=>({
type:SIGNUP_LOADING
});

export const signupSuccess=(payload)=>({
    type:SIGNUP_SUCCESS,
    payload
});

export const signupFailure=()=>({
    type:SIGNUP_FAILURE
});
