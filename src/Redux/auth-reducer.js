import {AuthAPI} from "../api/api";

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth:false,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                // isAuth:true,
            }
        default:
            return state
    }
}
export function setUsersData(id,email,login,isAuth) {
    return {
        type: "SET_USER_DATA",
        data:{
            id,
            email,
            login,
            isAuth,
        }
    }
}
export function isFetchingActionCreator(isFetching) {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    }
}
export function getAuthUserData() {
    return (dispatch) => {
        AuthAPI.auth()
            .then(data => {
                if(data.resultCode === 0){
                    dispatch(setUsersData(data.data.id, data.data.email, data.data.login, true))
                }
            });
    }
}
export function login(email,password,rememberMe) {
    return (dispatch) => {
        AuthAPI.login(email,password,rememberMe)
            .then(data => {
                if(data.resultCode === 0){
                    dispatch(getAuthUserData())
                }
            });
    }
}


export default authReducer;
