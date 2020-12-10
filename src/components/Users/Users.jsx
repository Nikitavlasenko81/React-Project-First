import React from "react";
import Card from "react-bootstrap/Card";
import {Col, Row} from "reactstrap/es";
import Button from "react-bootstrap/Button";
import * as axios from "axios";
import defoultPhoto from "../../assets/images/defoultUser.png"
import styles from "./Users.module.css"
import Image from "react-bootstrap/Image";


 class Users extends React.Component{
    getUsers = () =>{
     if( this.props.users.length === 0){
     axios.get("https://social-network.samuraijs.com/api/1.0/users")
 .then(response =>{
     this.props.setUsers(response.data.items);
 });
}
 }
    render() {
        return(
            <div>
                <Button onClick = {this.getUsers}>GetUsers</Button>
            <Row className={"m-4"}>
                {
                    this.props.users.map(user => {
                        return(
                            <Col sm={4}>
                                <Card className={"mb-4"}>
                                    <Row>
                                        <Col className = {styles.avatar}>
                                            <Image src={user.photos.small !== null ? user.photos.small : defoultPhoto} thumbnail />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Card.Body>
                                            <Card.Title>{user.name}</Card.Title>
                                            <Card.Text>
                                                {user.status}
                                            </Card.Text>
                                            <Row>
                                                {/*                                        <Col md={7}>
                                            <p className = {"mb-0"}>{user.location.city} {user.location.country}</p>
                                        </Col>*/}
                                                <Col md={4}>
                                                    {user.followed
                                                        ? <Button onClick = {()=>{ this.props.unfollow(user.id)} } variant="light">Follow</Button>
                                                        : <Button onClick = {()=>{ this.props.follow(user.id)} } variant="light">Unfollow</Button>}
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Row>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
            </div>
        )
    }

 }
export default Users;