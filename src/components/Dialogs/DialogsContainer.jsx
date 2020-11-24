import React from "react";
import styles from "./Dialogs.module.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DialogItem from "./DialogItem/DialogItem";
import Massage from "./Massage/Massage";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import Media from "react-bootstrap/Media";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {addMassageActionCreator, apdateNewMassageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    /*    creating an array of elements from a data array*/

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
    /*add new massage*/

    function addMassage(massageText){
        props.store.dispatch(addMassageActionCreator(massageText));

    }

    function apdateNewMassageText(text) {
        props.store.dispatch(apdateNewMassageTextActionCreator(text))
    }

    return (
        // <Container>
        //     <Row>
        //         <Col sm={3}>
        //             {DialogItemElements}
        //         </Col>
        //         <Col sm={9}>
        //             <Row>
        //                 <Col>
        //                     {massageElements}
        //                 </Col>
        //             </Row>
        //             <Row>
        //                 <Col>
        //                     <Form>
        //                         <Form.Group controlId="exampleForm.ControlTextarea1" className={`mt-4`}>
        //                             <Form.Control value={props.newMassageText} onChange={onMassageChange}
        //                                           ref={newMassageElement} as="textarea"
        //                                           placeholder="Type you massage..." rows={3}
        //                                           className={`mb-3 ${styles.textarea}`}/>
        //                             <div className="clearfix">
        //                                 <Button variant="light" className={`float-right mr-3`} onClick={addMassage}>Send
        //                                     massage</Button>
        //                             </div>
        //                         </Form.Group>
        //                     </Form>
        //                 </Col>
        //             </Row>
        //         </Col>
        //     </Row>
        // </Container>
        <Dialogs apdateNewMassageText = {apdateNewMassageText}  addMassage = {addMassage} massageElements ={massageElements} DialogItemElements={DialogItemElements} newMassageText={stete.newMassageText}/>
    )
}
export default DialogsContainer;

