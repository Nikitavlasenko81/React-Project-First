import React from "react";
// import DialogItem from "./DialogItem/DialogItem";
// import Massage from "./Massage/Massage";
// import Alert from "react-bootstrap/Alert";
import {addMassageActionCreator, apdateNewMassageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//     let stete = props.store.getState().dialogPage;
//
//     // let massageElements = stete.massageData.map(el => {
//     //     return (
//     //         <Alert variant="info">
//     //             <Massage massage={el.massage}/>
//     //         </Alert>
//     //     )
//     // })
//     // let DialogItemElements = stete.dialogsData.map(el => {
//     //     return (
//     //         <DialogItem name={el.name} id={el.id} surname={el.surname}/>
//     //     )
//     // })
//     function addMassage(massageText){
//         props.store.dispatch(addMassageActionCreator(massageText));
//
//     }
//
//     function apdateNewMassageText(text) {
//         props.store.dispatch(apdateNewMassageTextActionCreator(text))
//     }
//
//     return (
//         <Dialogs apdateNewMassageText = {apdateNewMassageText}  addMassage = {addMassage} massageData ={stete.massageData} dialogsData={stete.dialogsData} newMassageText={stete.newMassageText}/>
//     )
// }

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

