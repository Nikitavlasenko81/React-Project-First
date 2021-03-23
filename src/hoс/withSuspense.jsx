import React, {Suspense} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from "react-bootstrap/Spinner";
import {Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";

const withSuspense = (Component) => {
    return(props)=>{
        return(
            <Suspense fallback={<Col><Row className="justify-content-md-center mt-5"><Spinner animation="grow" variant="dark" /></Row></Col>}>
                <Component{...props}/>
            </Suspense>
        )
    }
}
export default withSuspense