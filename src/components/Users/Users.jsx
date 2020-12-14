import React from "react";
import Card from "react-bootstrap/Card";
import {Col, Row} from "reactstrap/es";
import Button from "react-bootstrap/Button";
import defoultPhoto from "../../assets/images/defoultUser.jpg"
import styles from "./Users.module.css"
import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";

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
                                    <Row>
                                        <Col className={styles.avatar}>
                                            <Image
                                                src={user.photos.small !== null ? user.photos.small : defoultPhoto}
                                                thumbnail
                                            />
                                        </Col>
                                    </Row>
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
                                                        ? <Button onClick={() => {
                                                            props.unfollow(user.id)
                                                        }} variant="light">Follow</Button>
                                                        : <Button onClick={() => {
                                                            props.follow(user.id)
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