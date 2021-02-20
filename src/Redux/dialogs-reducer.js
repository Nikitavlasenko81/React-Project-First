import {returnLastItem} from "./store";

let initialState = {
    dialogsData: [
        {id: 1, name: "Dima", surname: "Andreev", massage:"MassageItem text..."},
        {id: 2, name: "Irina", surname: "Tert", massage:"MassageItem text..."},
        {id: 3, name: "Nikita", surname: "Las", massage:"MassageItem text..."},
        {id: 4, name: "Andrei", surname: "Bolotov", massage:"MassageItem text..."},
        {id: 5, name: "Arkadi", surname: "Gerer", massage:"MassageItem text..."},
    ],
        massageData: [
    {id: 1, massage: "MassageItem text here id1", author:"Author Name"},
    {id: 2, massage: "MassageItem text here id2", author:"Author Name"},
    {id: 3, massage: "MassageItem text here id3", author:"Author Name"},
    {id: 4, massage: "MassageItem text here id4", author:"Author Name"},
    {id: 5, massage: "MassageItem text here id5", author:"Author Name"},
]
}

function dialogsReducer(state = initialState, action) {
    switch (action.type) {
        case "CREATE-MASSAGE": {
            let massage = action.massageText;
            return {
                ...state,
                massageData :[...state.massageData, {id: returnLastItem(state.massageData).id + 1, massage:massage,}]
            }
        }
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

export default dialogsReducer;