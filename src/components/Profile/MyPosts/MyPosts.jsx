import React from "react"
import styles from "./MyPosts.module.css"
import Post from "./Post/Post"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dialogs from "../../Dialogs/Dialogs";
import Profile from "../Profile";
import MyPostContainer from "./MyPostContainer";
import WritePost from "./WritePost/WritePost";
function MyPosts(props){
    return (
      <div className={styles.content}>
          <WritePost newPostText = {props.newPostText} apdateNewPostText = {props.apdateNewPostText} addPost = {props.addPost}/>
          {props.postElement.reverse()}
      <div>
</div>
    </div>

    )
}
export default MyPosts