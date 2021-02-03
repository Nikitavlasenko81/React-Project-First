import {returnLastItem} from "./store";
import {ProfileAPI} from "../api/api";

let initialState = {
    postData: [
        {id: 1, massage: "Text post 1"},
        {id: 2, massage: "Text post 2"},
        {id: 3, massage: "Text post 3"},
        {id: 4, massage: "Text post 4"},
        {id: 5, massage: "Text post 5"},
    ],
    infoData: [
        {
            name: "Nikita",
            surname: "Vlasenko",
            city: "Kramatorsk",
            dateOfBirth: "29.01.1999",
            placeOfStudy: "KHAI",
        },
    ],
    newPostText: "",
    profile: null,
}


function profileReducer(state = initialState, action) {
    switch (action.type) {
        case "CREATE-POST": {

            let massage = state.newPostText;
            let id = returnLastItem(state.postData).id + 1

            return {
                ...state,
                postData:[...state.postData, { id: id, massage: massage }],
                newPostText: ""
            }
        }
        case "UPDATE-NEW-POST-TEXT":{
            return {
                ...state,
                newPostText: action.newPostText,
            };
        }
        case "SET-USER-PROFILE":{
            return {
                ...state,
                profile: action.profile,
            };
        }
        default:
            return state
    }
}
// Action Creators
export function addPostActionCreator() {
    return {
        type: "CREATE-POST",
    }
}

export function apdateNewPostTextActionCreator(text) {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: text,
    }
}

export function setUserProfile(profile) {
    return {
        type: "SET-USER-PROFILE",
        profile,
    }
}
// Thaunk Creators

export function getUserProfile(userId,myId) {
    return (dispatch) =>{
        ProfileAPI.profile(userId === undefined ? myId : userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}

export default profileReducer;