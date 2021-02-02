import React from "react";
import {connect} from "react-redux";
import {follow, getUsers,unfollow,} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (number) => {
        this.props.getUsers(number,this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         users={this.props.users}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

let UserContainer = connect(mapStateToProps, {follow,unfollow,getUsers})(UsersAPIComponent);

export default UserContainer;
