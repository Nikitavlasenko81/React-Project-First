import React from "react";
import styles from "./Dialogs.module.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DialogItem from "./DialogItem/DialogItem";
import MassageItem from "./MassageItem/MassageItem";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    /*add new massage*/

    let massageElements = props.massageData.map(el => {
        return (
            (el.id % 2 === 0)
                ? <Row>
                    <Col>
                        <div className = {"float-left"}><MassageItem massage={el.massage} author = {props.abort} key = {el.id}/></div>
                    </Col>
                </Row>
                : <Row>
                <Col>
                        <div className = {"float-right"}><MassageItem massage={el.massage} author = {props.abort} key = {el.id}/></div>
                </Col>
                </Row>
        )
    })
    let DialogItemElements = props.dialogsData.map(el => {
        return (
            <DialogItem name={el.name} id={el.id} surname={el.surname} massage = {el.massage} key={el.id}/>
        )
    })

    function addNewMassage(values) {
        props.addMassage(values.newMassageElement);
    }

    return (
        <Container fluid className = {"mt-3"}>
            <Row>
                <Col sm={4}>
                    {DialogItemElements}
                </Col>
                <Col sm={8}>
                            {massageElements}
                    <Row>
                        <Col>
                            <AddMassageFormRedux onSubmit={addNewMassage}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    )
}
const AddMassageForm = (props)=>{
    return(
            <form onSubmit={props.handleSubmit}>
                <Field component={"textarea"} name={"newMassageElement"} placeholder={"Type you massage..."}/>
                <div className="clearfix">
                    <button className={`float-right mr-3`}>Send massage</button>
                </div>
            </form>
    )
}
const AddMassageFormRedux = reduxForm({form: "dialogAddMassageForm"})(AddMassageForm)
export default Dialogs;

