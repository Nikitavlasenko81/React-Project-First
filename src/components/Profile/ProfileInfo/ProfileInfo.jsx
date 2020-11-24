import React from "react";
import styles from "./ProfileInfo.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
function ProfileInfo(props){
    return (
        <Row>
            <Col className="text-center" lg={5}>
                <Image src="http://www.themashabrand.com/templates/Masha/Medium/img/users/2.jpg" roundedCircle />
            </Col>
            <Col>
                <h1>{`${props.infoData[0].name} ${props.infoData[0].surname}`}</h1>
                <ul>
                    <li>
                        <p>City: {props.infoData[0].city}</p>
                    </li>
                    <li>
                            <p>Date of Birth: {props.infoData[0].dateOfBirth}</p>
                    </li>
                    <li>
                        <p>Place of Study: {props.infoData[0].placeOfStudy}</p>
                    </li>

                </ul>
            </Col>
        </Row>
    )
}
export default ProfileInfo