import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }
    activeEditMode = () =>{
        this.setState(
            {editMode : true,}
        )
    }
    deactivateEditMode= () =>{
        this.setState(
            {editMode : false,}
        )
        console.log(this.state.status)
        this.props.updateUserStatus(this.state.status);
    }
    onStatusChange = (e)=>{
        this.setState(
            {status: e.currentTarget.value}
        );
    }
    render() {
        return (
            <Row>{
                    !this.state.editMode === true
                    ? <Col> <p onDoubleClick={this.activeEditMode}>{this.props.status || "Change status"}</p> </Col>
                    : <Col> <input onChange={this.onStatusChange} value={this.props.status} autoFocus={true} onBlur={this.deactivateEditMode}/> </Col>
                }
            </Row>
        )
    }
}

export default ProfileStatus