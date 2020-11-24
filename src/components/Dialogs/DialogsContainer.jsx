import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Massage from "./Massage/Massage";
import Alert from "react-bootstrap/Alert";
import {addMassageActionCreator, apdateNewMassageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {


    let stete = props.store.getState().dialogPage;

    let massageElements = stete.massageData.map(el => {
        return (
            <Alert variant="info">
                <Massage massage={el.massage}/>
            </Alert>
        )
    })
    let DialogItemElements = stete.dialogsData.map(el => {
        return (
            <DialogItem name={el.name} id={el.id} surname={el.surname}/>
        )
    })
    function addMassage(massageText){
        props.store.dispatch(addMassageActionCreator(massageText));

    }

    function apdateNewMassageText(text) {
        props.store.dispatch(apdateNewMassageTextActionCreator(text))
    }

    return (
        <Dialogs apdateNewMassageText = {apdateNewMassageText}  addMassage = {addMassage} massageElements ={massageElements} DialogItemElements={DialogItemElements} newMassageText={stete.newMassageText}/>
    )
}
export default DialogsContainer;

