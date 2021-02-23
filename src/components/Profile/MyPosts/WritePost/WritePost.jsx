import React from "react"
import styles from "./WritePost.module.css"
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../utils/validators/validators";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Textarea} from "../../../common/FormsControls/FormsControls";


function WritePost(props){

    function AddPost(values){
        props.addPost(values.newPostElement)
    }

    return (
        <PostFormRedux onSubmit={AddPost}/>
    )
}
const maxLength50 = maxLength(50)

const AddPostForm = (props) =>{
    return(

        <Form onSubmit={props.handleSubmit} noValidate >
            <Form.Group contolId="exampleForm.ControlTextarea1" className={`mt-4 mb-3 ${styles.formGroup}`}>
                <Field component={Textarea} name={"newPostElement"} validate={[required,maxLength50]}  />
                <div className="clearfix">
                    <Button type="submit" className={`float-right mr-3 mb-3 ${styles.submitBtn}`}>Submit</Button>
                </div>
            </Form.Group>
        </Form>
    )
}
const PostFormRedux = reduxForm({form: "PostAddMassageForm"})(AddPostForm)
export default WritePost