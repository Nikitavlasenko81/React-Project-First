import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }
    activeEditMode(){
        this.setState(
            {editMode : true,}
        )
    }
    deactivateEditMode(){
        this.setState(
            {editMode : false,}
        )
    }

    render() {
        return (
            <Row>{
                    !this.state.editMode === true
                    ? <Col> <p onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status}</p> </Col>
                    : <Col> <input value={this.props.status} onBlur={this.deactivateEditMode.bind(this)}/> </Col>
                }
            </Row>
        )
    }
}

export default ProfileStatus