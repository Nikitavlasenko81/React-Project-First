import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./Profile";
import {getUserProfile, getUserStatus, savePhoto, updateUserStatus,} from "../../Redux/profile-reducer";
import withRouter from "react-router-dom/withRouter";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoс/withAuthRedirect";

class ProfileContainer extends React.Component {
    refreshProfile(){
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.myId
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
            />
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
export default connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto})(WithUrlDataContainerComponent) // теперь передаем обьект с actionCreator