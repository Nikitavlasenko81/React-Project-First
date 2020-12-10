import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./MassageItem.module.css"

const MassageItem = (props) =>{
    return(
        // <Toast>
        //     <Toast.Header>
        //         <img width={20}
        //              height={20}
        //              src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
        //              className="rounded mr-2"
        //              alt="avatar" />
        //         <strong className="mr-auto">Author</strong>
        //         <small>11 mins ago</small>
        //     </Toast.Header>
        //     <Toast.Body>{props.massage}</Toast.Body>
        // </Toast>

        <Card body className = {styles.massage}>{props.massage}</Card>
    )
}
export default MassageItem;

