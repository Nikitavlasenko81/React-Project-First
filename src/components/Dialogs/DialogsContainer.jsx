import React from "react";
import {addMassageActionCreator, apdateNewMassageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoс/withAuthRedirect";

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
let AuthRedirectComponent = withAuthRedirect(Dialogs)
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;

