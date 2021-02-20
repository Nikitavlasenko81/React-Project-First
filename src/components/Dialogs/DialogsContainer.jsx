import React from "react";
import {addMassageActionCreator, apdateNewMassageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoс/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        newMassageText: state.dialogPage.newMassageText,
        massageData: state.dialogPage.massageData,
        dialogsData: state.dialogPage.dialogsData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMassage: (massageText) => {
            dispatch(addMassageActionCreator(massageText))
        },
    }
}
let DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)

export default DialogsContainer;

