import React from "react";
import {Form} from "react-bootstrap";

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div>
            <Form.Control {...input} {...props} value={props.newPostText} as="textarea" placeholder={props.placeholder}
                          rows={3} isInvalid={meta.error && meta.touched}/>
            <Form.Control.Feedback type="invalid">
                {meta.error}
            </Form.Control.Feedback>
        </div>
    )
}