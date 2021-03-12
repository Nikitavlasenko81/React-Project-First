import React from "react";
import {connect} from "react-redux";
import {follow, requestUsers,unfollow,} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {withAuthRedirect} from "../../hoс/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (number) => {
        this.props.requestUsers(number,this.props.pageSize)
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
let WithRedirectContainerComponent = withAuthRedirect(UsersAPIComponent)
let UserContainer = connect(mapStateToProps, {follow,unfollow,requestUsers})(WithRedirectContainerComponent);

export default UserContainer;
