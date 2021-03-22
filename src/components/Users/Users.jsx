import React from "react";

import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


let Users = (props) => {
    return (
        <div>
            <Row className={"m-4"}>
                {
                    props.users.map(user => <User
                        user={user}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}/>)
                }
            </Row>
            <Row>
                <Col sm={12}>
                    <Row className="justify-content-md-center">
                        <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} portionSize={15}/>
                    </Row>
                </Col>
            </Row>
        </div>

    )
}
export default Users;