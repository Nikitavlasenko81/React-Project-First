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
                isAuth:true,
            }
        default:
            return state
    }
}
export function setUsersData(id,email,login) {
    return {
        type: "SET_USER_DATA",
        data:{
            id,
            email,
            login,
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
                    dispatch(setUsersData(data.data.id, data.data.email, data.data.login))
                }
            });
    }

}


export default authReducer;
