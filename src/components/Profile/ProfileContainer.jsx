import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../Redux/profile-reducer";
import withRouter from "react-router-dom/es/withRouter";
import {connect} from "react-redux";
import {ProfileAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        ProfileAPI.profile(userId === undefined ? this.props.myId : userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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
        myId : state.auth.id
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)// еще одна компонента которая берет инфу из ссылки и закидывает в ProfileContainer
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent) // теперь передаем обьект с actionCreator