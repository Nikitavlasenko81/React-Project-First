import styles from "./Header.module.css";
import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {NavLink} from "react-router-dom";

let Header = (props) =>{
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header