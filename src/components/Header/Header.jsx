import styles from "./Header.module.css";
import React from 'react';
import Navbar from "react-bootstrap/Navbar";

function Header(props){
  return(
      <Navbar className={`${styles.header}`}>
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
      </Navbar>
  )
}
export default Header