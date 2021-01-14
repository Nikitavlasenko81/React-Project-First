import React from "react";
import Card from "react-bootstrap/Card";
import {Col, Row} from "reactstrap/es";
import Button from "react-bootstrap/Button";
import defoultPhoto from "../../assets/images/defoultUser.jpg"
import styles from "./Users.module.css"
import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let active = props.currentPage;
    let pages = [];
    for (let number = 1; number <= pagesCount; number++) {
        if (number > 20) {
            pages.push(<Pagination.Ellipsis/>)
            break
        } else {
            pages.push(
                <Pagination.Item key={number} active={number === active} onClick={(e) => {
                    props.onPageChanged(number)
                }}>
                    {number}
                </Pagination.Item>
            );
        }
    }

    return (
        <div>
            <Row className={"m-4"}>
                {
                    props.users.map(user => {
                        return (
                            <Col sm={4}>
                                <Card className={"mb-4"}>
                                    <NavLink to = {`/profile/${user.id}`} st>
                                    <Row>
                                        <Col>
                                            <Image
                                                src={user.photos.small !== null ? user.photos.small : defoultPhoto}
                                                thumbnail
                                                style={{ width: '17rem' }}
                                            />
                                        </Col>
                                    </Row>
                                    </NavLink>
                                    <Row>
                                        <Card.Body>
                                            <Card.Title>{user.name}</Card.Title>
                                            <Card.Text>
                                                {user.status}
                                            </Card.Text>
                                            <Row>
                                                {/*<Col md={7}>
                                            <p className = {"mb-0"}>{user.location.city} {user.location.country}</p>
                                        </Col>*/}
                                                <Col md={4}>
                                                    {user.followed
                                                        ? <Button onClick={(e) => {
                                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{
                                                                withCredentials: true,
                                                                headers:{
                                                                    "API-KEY" : "c05f61ef-80c8-4f42-b591-72ab0658de12",
                                                                },
                                                            })
                                                                .then(response => {
                                                                    if(response.data.resultCode === 0 ){
                                                                        props.unfollow(user.id)
                                                                    }
                                                                });
                                                        }} variant="light">Follow</Button>

                                                        : <Button onClick={(e) => {
                                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},{
                                                                withCredentials: true,
                                                                headers:{
                                                                    "API-KEY" : "c05f61ef-80c8-4f42-b591-72ab0658de12",
                                                                },
                                                            })
                                                                .then(response => {
                                                                    if(response.data.resultCode === 0 ){
                                                                        props.follow(user.id)
                                                                    }
                                                                });
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
                    })
                }
            </Row>
            <Row>
                <Col>
                    <Pagination className={styles.pagination}>
                        {pages}
                    </Pagination>
                </Col>
            </Row>
        </div>

    )
}

export default Users;