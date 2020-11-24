import React from "react";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
/*import {rerenderEntireTree} from "../render";*/

let store = {
    _state: {
        dialogPage: {
            dialogsData: [
                {id: 1, name: "Dima", surname: "Andreev"},
                {id: 2, name: "Irina", surname: "Tert"},
                {id: 3, name: "Nikita", surname: "Las"},
                {id: 4, name: "Andrei", surname: "Bolotov"},
                {id: 5, name: "Arkadi", surname: "Gerer"},
            ],
            massageData: [
                {id: 1, massage: "Massage text here id1"},
                {id: 2, massage: "Massage text here id2"},
                {id: 3, massage: "Massage text here id3"},
                {id: 4, massage: "Massage text here id4"},
                {id: 5, massage: "Massage text here id5"},
            ],
            newMassageText: ""
        },
        profilePage: {
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

    },
    _callSubscriber() {
        alert("state change")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._callSubscriber(this._state);
    }

}

export function returnLastItem(arr) {
    return arr[arr.length - 1];
}

window.store = store;

export default store;


