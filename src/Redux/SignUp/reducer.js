import { SIGNUP_LOADING ,  SIGNUP_FAILURE, SIGNUP_SUCCESS } from "./action";

const initState={
    loading:false,
    isRegister:false,
    token:"",
    error:false
};


const signupReducer=(store=initState, {type, payload})=>{
    switch (type){
        case SIGNUP_LOADING:
            return{
                ...store,
                loading:true
            };

        case SIGNUP_SUCCESS:
            return {
                ...store,
                loading:false,
                isRegister:true,
                token:payload
            }   
            
        case SIGNUP_FAILURE:
            return{
                ...store,
                loading:false,
                isRegister:false,
                error:true
            };
        default:
            return store
    }
};

export{ signupReducer };