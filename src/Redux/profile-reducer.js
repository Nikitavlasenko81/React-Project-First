import {returnLastItem} from "./store";

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
    newPostText: ""
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
        default:
            return state
    }
}

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

export default profileReducer;