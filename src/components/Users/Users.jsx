import React from "react";
import Card from "react-bootstrap/Card";
import {Col, Row} from "reactstrap/es";
import Button from "react-bootstrap/Button";

const Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([
            {id: 1, photoUrl:"https://ireland.apollo.olxcdn.com/v1/files/x4fh72hzhe563-UA/image;s=1000x700", followed: false, fullName: "Nikita", status: "i am .....", location: {city:"Charkiv",country: "Ukraine"} },
            {id: 2, photoUrl:"https://ireland.apollo.olxcdn.com/v1/files/x4fh72hzhe563-UA/image;s=1000x700", followed: true, fullName: "Sasha", status: "i am .....", location: {city:"Charkiv",country: "Ukraine"} },
            {id: 3, photoUrl:"https://ireland.apollo.olxcdn.com/v1/files/x4fh72hzhe563-UA/image;s=1000x700", followed: false, fullName: "Danil", status: "i am .....", location: {city:"Charkiv",country: "Ukraine"} },
            {id: 4, photoUrl:"https://ireland.apollo.olxcdn.com/v1/files/x4fh72hzhe563-UA/image;s=1000x700", followed: false, fullName: "Dima", status: "i am .....", location: {city:"Charkiv",country: "Ukraine"} },
        ]);
    }

    return(
        <Row className={"m-4"}>
            {
                props.users.map(user => {
                    return(
                        <Col sm={4}>
                            <Card className={"mb-4"}>
                                <Card.Img variant="top" src={user.photoUrl} />
                                <Card.Body>
                                    <Card.Title>{user.fullName}</Card.Title>
                                    <Card.Text>
                                        {user.status}
                                    </Card.Text>
                                    <Row>
                                        <Col md={7}>
                                            <p className = {"mb-0"}>{user.location.city} {user.location.country}</p>
                                        </Col>
                                        <Col md={4}>
                                            {user.followed
                                                ? <Button onClick = {()=>{props.unfollow(user.id)} } variant="light">Follow</Button>
                                                : <Button onClick = {()=>{props.follow(user.id)} } variant="light">Unfollow</Button>}
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
        )
}
export default Users;