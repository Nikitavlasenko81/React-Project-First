import React from "react";
import styles from "./MassageItem.module.css"
import Toast from "react-bootstrap/Toast";

const MassageItem = (props) =>{
    return(
        <Toast>
            <Toast.Header>
                <img width={20}
                     height={20}
                     src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
                     className="rounded mr-2"
                     alt="avatar" />
                <strong className="mr-auto">Author</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>{props.massage}</Toast.Body>
        </Toast>
    )
}
export default MassageItem;

