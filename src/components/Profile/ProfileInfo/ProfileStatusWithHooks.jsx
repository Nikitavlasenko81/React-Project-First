import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activeEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <Row>{
            !editMode === true
                ? <Col><p onDoubleClick={activeEditMode}>{props.status || "Change status"}</p></Col>
                : <Col> <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}
                               value={status}/></Col>
        }
        </Row>
    )

}

export default ProfileStatusWithHooks