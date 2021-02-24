import './App.css';
import React from "react";
import "./App.css";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Navigation from "./components/Navigation/Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App(props) {
    return (
<Container>
    <Row className="header">
        <Col>
            <HeaderContainer/>
        </Col>
    </Row>
    <Row className={"mt-3"}>
        <Col sm={3} lg={2}>
            <Navigation/>
        </Col>
        <Col sm={9} lg={10} className="page">
            <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
            <Route path="/profile/:userId?" render={() => <ProfileContainer store={props.store}/>}/>
            <Route path="/users" render={() => <UsersContainer/>}/>
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/login" render={() => <Login/>}/>
        </Col>
    </Row>
</Container>

    );
}

export default App;
