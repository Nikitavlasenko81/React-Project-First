import React from "react";
import styles from "./Dialogs.module.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DialogItem from "./DialogItem/DialogItem";

import MassageItem from "./MassageItem/MassageItem";

const Dialogs = (props) => {
    /*add new massage*/
    let newMassageElement = React.createRef();

    let massageElements = props.massageData.map(el => {
        return (
            <MassageItem massage={el.massage} author = {props.abort} key = {el.id}/>
        )
    })
    let DialogItemElements = props.dialogsData.map(el => {
        return (
            <DialogItem name={el.name} id={el.id} surname={el.surname} massage = {el.massage} key={el.id}/>
        )
    })

    function onAddMassage() {
        let massageText = newMassageElement.current.value;
        props.addMassage(massageText);

    }

    function onMassageChange() {
        let text = newMassageElement.current.value;
        props.apdateNewMassageText(text)
    }

    return (
        <Container>
            <Row>
                <Col sm={4}>
                    {DialogItemElements}
                </Col>
                <Col sm={8}>
                    <Row>
                        <Col>
                            {massageElements}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1" className={`mt-4`}>
                                    <Form.Control value={props.newMassageText} onChange={onMassageChange}
                                                  ref={newMassageElement} as="textarea"
                                                  placeholder="Type you massage..." rows={3}
                                                  className={`mb-3 ${styles.textarea}`}/>
                                    <div className="clearfix">
                                        <Button variant="light" className={`float-right mr-3`} onClick={onAddMassage}>Send massage</Button>
                                    </div>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    )
}
export default Dialogs;

