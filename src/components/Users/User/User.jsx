import React from "react";
import Card from "react-bootstrap/Card";
import {Col, Row} from "reactstrap";
import Button from "react-bootstrap/Button";
import defoultPhoto from "../../../assets/images/defoultUser.jpg"
import Image from "react-bootstrap/Image";
import {NavLink} from "react-router-dom";

const User = ({user,...props})=> {
    return (
        <Col sm={4}>
            <Card className={"mb-4"}>
                <NavLink to={`/profile/${user.id}`} st>
                    <Row>
                        <Col>
                            <Image
                                src={user.photos.small !== null ? user.photos.small : defoultPhoto}
                                thumbnail
                                style={{width: '17rem'}}
                            />
                        </Col>
                    </Row>
                </NavLink>
                <Row>
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                            {user.status && "No status"}
                        </Card.Text>
                        <Row>
                            <Col md={4}>
                                {user.followed
                                    ? <Button disabled={props.followingInProgress} onClick={(e) => {
                                        props.unfollow(user.id);
                                    }} variant="light">Follow</Button>

                                    : <Button disabled={props.followingInProgress} onClick={(e) => {
                                        props.follow(user.id);
                                    }} variant="light">Unfollow</Button>}
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
}
export default User
