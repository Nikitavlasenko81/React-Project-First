import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Preloader from "../../common/Preloader";
import defoultPhoto from "../../../assets/images/defoultUser.jpg"
import ProfileStatus from "./ProfileStatus"

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <Row>
                <Col className="text-center" lg={5}>
                    <Image src={props.profile.photos.large === null ? defoultPhoto : props.profile.photos.large} roundedCircle style={{ width: '20rem' }}/>
                </Col>
                <Col>
                    <h1>{props.profile.fullName}</h1>
                    <ProfileStatus status={"Hellow friend"}/>
                    <p>{props.profile.aboutMe}</p>
                    <ul>
                        <li>
                            <p>City: {!props.profile.city ? "Not specified": props.profile.city}</p>
                        </li>
                        <li>
                            <p>Date of Birth: {!props.profile.dateOfBirth ? "Not specified": props.profile.dateOfBirth}</p>
                        </li>
                        <li>
                            <p>Facebook: {props.profile.contacts.facebook}</p>
                        </li>
                        <li>
                            <p>VK: {props.profile.contacts.vk}</p>
                        </li>
                        <li>
                            <p>Work: {props.profile.lookingForAJob ? "I am looking for a job":"I have a job"}</p>
                            <p>{props.profile.lookingForAJobDescription}</p>
                        </li>

                    </ul>
                </Col>
            </Row>
        )
    }
}

export default ProfileInfo