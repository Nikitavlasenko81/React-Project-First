import styles from "./Header.module.css";
import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Redirect from "react-router-dom/es/Redirect";

let Header = (props) =>{
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/profile">Home</Navbar.Brand>
            <Nav className="mr-auto">
                {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                {/*<Nav.Link href="#features">Features</Nav.Link>*/}
                {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
                </Navbar.Text>
                {(props.isAuth) && <Button className={"ml-2"} variant="outline-danger" onClick={props.logout} size="sm">Log out</Button>}
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header