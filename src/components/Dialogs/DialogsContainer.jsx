import React from "react";
// import DialogItem from "./DialogItem/DialogItem";
// import MassageItem from "./MassageItem/MassageItem";
// import Alert from "react-bootstrap/Alert";
import {addMassageActionCreator, apdateNewMassageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMassageText: state.dialogPage.newMassageText,
        massageData: state.dialogPage.massageData,
        dialogsData: state.dialogPage.dialogsData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        apdateNewMassageText: (text) => {
            dispatch(apdateNewMassageTextActionCreator(text))
        },
        addMassage: (massageText) => {
            dispatch(addMassageActionCreator(massageText))
        },
    }
}
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

