import React from "react";
import {Col, Row} from "reactstrap/es";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";


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
                    <Row>
                        <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
                    </Row>
                </Col>
            </Row>
        </div>

    )
}
export default Users;