import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

function Profile(props) {
    return (
        <div>
            <ProfileInfo
                infoData={props.store.getState().profilePage.infoData}
                profile={props.profile} status={props.status}
                updateUserStatus={props.updateUserStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
            />
            <div><MyPostContainer store={props.store}/></div>
        </div>
    )
}

export default Profile