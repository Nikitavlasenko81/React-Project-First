import React from "react"
import MyPosts from "./MyPosts";
import {addPostActionCreator,} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {
            dispatch(addPostActionCreator(postText))
        },
    }
}
let newMyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default newMyPostContainer