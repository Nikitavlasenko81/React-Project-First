import React from "react"
import styles from "./MyPosts.module.css"
import Post from "./Post/Post"
import 'bootstrap/dist/css/bootstrap.min.css';
import WritePost from "./WritePost/WritePost";
function MyPosts(props){
    let postElement = props.postData.map(el =>{
        return <Post message ={el.massage}/>
    });

    return (
      <div className={styles.content}>
          <WritePost newPostText = {props.newPostText} apdateNewPostText = {props.apdateNewPostText} addPost = {props.addPost}/>
          {postElement.reverse()}
      <div>
</div>
    </div>

    )
}
export default MyPosts