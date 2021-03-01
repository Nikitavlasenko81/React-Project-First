import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

let initialState = {
    initialized: false,
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}
export function initializedSuccess() {
    return {
        type: "INITIALIZED_SUCCESS",
    }
}
export function initializeApp() {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());
        // some promise
        Promise.all([promise])
            .then(()=>{
            dispatch(initializedSuccess());
        })

    }
}


export default appReducer;
