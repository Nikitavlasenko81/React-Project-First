import React from "react"
import {addPostActionCreator, apdateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import WritePost from "./WritePost";
import Post from "../Post/Post";

function WritePostContainer(props){

 function addPost(){
        props.dispatch(addPostActionCreator());
    }

    function apdateNewPostText(text){
    props.dispatch(apdateNewPostTextActionCreator(text))
    }

    let postElement = props.postData.map(el =>{
        return <Post message ={el.massage}/>
    });

    return (
        <div>
            <WritePost apdateNewPostText = {apdateNewPostText} addPost = {addPost}/>
            {postElement.reverse()}
        </div>
    )
}
export default WritePostContainer