import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Dialogs from "../Dialogs/Dialogs";
import MyPostContainer from "./MyPosts/MyPostContainer";

function Profile(props) {
    return (
        <div>
                <ProfileInfo infoData={props.store.getState().profilePage.infoData} />
            <div><MyPostContainer store = {props.store}/>
            </div>
        </div>
    )
}

export default Profile