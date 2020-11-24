import React from "react"
import styles from "./WritePost.module.css"
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function WritePost(props){
    let newPostElement = React.createRef()

    function onAddPost(){
        props.addPost();
    }

    function onPostChange(){
    let text = newPostElement.current.value;
    props.apdateNewPostText(text);
    }

    return (
        <Form>
            <Form.Group contolId="exampleForm.ControlTextarea1" className={`mt-4 mb-3 ${styles.formGroup}`}>
                <Form.Control value={props.newPostText} onChange={onPostChange} ref={newPostElement} as="textarea" placeholder="Type something..." rows={3} className={`mb-3 ${styles.textarea}`}/>
                <div className="clearfix">
                    <Button onClick={onAddPost} className={`float-right mr-3 mb-3 ${styles.submitBtn}`}>Submit</Button>
                </div>
            </Form.Group>
        </Form>
    )
}
export default WritePost