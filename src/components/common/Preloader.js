import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";

let Preloader = (props) => {
    return(
        <Row className = {"justify-content-center"}>
            <Spinner className="m-5 mb-3" animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </Row>
    )
}
export default Preloader