import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/reducer";

import { signupReducer } from "./SignUp/reducer";

export const rootReducer=combineReducers({
    login:loginReducer,
    signup: signupReducer,
   
});

export const store =createStore(rootReducer, applyMiddleware(thunk))
