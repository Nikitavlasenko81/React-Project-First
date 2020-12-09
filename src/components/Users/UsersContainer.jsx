import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import Dialogs from "../Dialogs/Dialogs";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../Redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>{
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) =>{
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) =>{
            dispatch(setUsersActionCreator(users))
        }

    }
};

let UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;
