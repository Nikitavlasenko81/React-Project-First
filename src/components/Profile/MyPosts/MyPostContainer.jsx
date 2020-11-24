import React from "react"
import Post from "./Post/Post";
import MyPosts from "./MyPosts";
import {addPostActionCreator, apdateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

function MyPostContainer(props){
    let state = props.store.getState();

 function addPost(){
        props.store.dispatch(addPostActionCreator());
    }
    function apdateNewPostText(text){
    props.store.dispatch(apdateNewPostTextActionCreator(text))
    }
    let postElement = state.profilePage.postData.map(el =>{
        return <Post message ={el.massage}/>
    });

    return (
        <div>
            <MyPosts postElement = {postElement} apdateNewPostText = {apdateNewPostText} addPost = {addPost} newPostText={state.profilePage.newPostText}/>
        </div>
    )
}
export default MyPostContainer