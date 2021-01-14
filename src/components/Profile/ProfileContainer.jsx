import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../Redux/profile-reducer";
import withRouter from "react-router-dom/es/withRouter";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
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
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)// еще одна компонента которая берет инфу из ссылки и закидывает в ProfileContainer
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent) // теперь передаем обьект с actionCreator