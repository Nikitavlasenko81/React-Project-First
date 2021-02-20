import React from "react"
import styles from "./WritePost.module.css"
import {Field, reduxForm} from "redux-form";
function WritePost(props){

    function AddPost(values){
        props.addPost(values.newPostElement)
    }

    return (
        <PostFormRedux onSubmit={AddPost}/>
    )
}
const AddPostForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newPostElement"} placeholder={"Type something..."}/>
            <div className="clearfix">
                <button className={`float-right mr-3 mb-3 ${styles.submitBtn}`}>Submit</button>
            </div>
        </form>
    )
}
const PostFormRedux = reduxForm({form: "PostAddMassageForm"})(AddPostForm)
export default WritePost