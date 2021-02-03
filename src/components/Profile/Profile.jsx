import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";
import Redirect from "react-router-dom/es/Redirect";

function Profile(props) {
    if(props.isAuth === false){
        return <Redirect to={"/login"}/>;
    }
    return (
        <div>
                <ProfileInfo infoData={props.store.getState().profilePage.infoData} profile ={props.profile}/>
            <div><MyPostContainer store = {props.store}/>
            </div>
        </div>
    )
}

export default Profile