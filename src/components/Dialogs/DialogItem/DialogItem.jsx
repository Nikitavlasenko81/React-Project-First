import React from "react";
import styles from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import {Row} from "react-bootstrap";


const DialogItem = (props) =>{
    let path = "/dialogs/"+ props.id;
    return(
            <NavLink to={path} activeClassName={styles.active}>
                <Alert variant="info" className={'shadow'}>
                    <Row>
                        <img
                            width={30}
                            height={30}
                            className="mr-3"
                            src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
                            alt="Avatar"
                        />
                        <h5 className={styles.name}>{props.name} {props.surname}</h5>
                    </Row>
                    <Row className={styles.shortMessageText}>
                        <p>{props.massage}</p>
                    </Row>
                    <Row>
                        <p className={styles.lastVisit}>Был в сети 20 мин</p>
                    </Row>

                 </Alert>
            </NavLink>

    )
}
export default DialogItem;

