import {returnLastItem} from "./store";

let initialState = {
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
}

function dialogsReducer(state = initialState, action) {
    switch (action.type) {
        case "CREATE-MASSAGE":
            let newMassage = {
                id: returnLastItem(state.massageData).id + 1,
                massage: state.newMassageText,
            };
            state.massageData.push(newMassage);
            state.newMassageText = ""
            return state;
        case "UPDATE-NEW-MASSAGE-TEXT":
            state.newMassageText = action.newMassageText;
            return state;
        default:
            return state;
    }
}

export function addMassageActionCreator(massageText) {
    return {
        type: "CREATE-MASSAGE",
        massageText: massageText,
    }
}

export function apdateNewMassageTextActionCreator(text) {
    return {
        type: "UPDATE-NEW-MASSAGE-TEXT",
        newMassageText: text,
    }
}

export default dialogsReducer;