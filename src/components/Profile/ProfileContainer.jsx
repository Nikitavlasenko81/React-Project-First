import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./Profile";
import {getUserProfile,} from "../../Redux/profile-reducer";
import withRouter from "react-router-dom/es/withRouter";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoс/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId, this.props.myId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
let mapStateToProps = (state) =>{
    return{
        profile: state.profilePage.profile,
        myId : state.auth.id,
        isAuth: state.auth.isAuth,
    }
}
let WithRedirectContainerComponent = withAuthRedirect(ProfileContainer)
let WithUrlDataContainerComponent = withRouter(WithRedirectContainerComponent)// еще одна компонента которая берет инфу из ссылки и закидывает в ProfileContainer
export default connect(mapStateToProps,{getUserProfile})(WithUrlDataContainerComponent) // теперь передаем обьект с actionCreator