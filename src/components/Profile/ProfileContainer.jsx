import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus,} from "../../Redux/profile-reducer";
import withRouter from "react-router-dom/withRouter";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoс/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.myId
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        myId: state.auth.id,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}


let WithRedirectContainerComponent = withAuthRedirect(ProfileContainer)
let WithUrlDataContainerComponent = withRouter(WithRedirectContainerComponent)// еще одна компонента которая берет инфу из ссылки и закидывает в ProfileContainer
export default connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus
})(WithUrlDataContainerComponent) // теперь передаем обьект с actionCreator