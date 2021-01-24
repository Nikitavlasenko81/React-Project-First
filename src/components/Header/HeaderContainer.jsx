import React from 'react';
import * as axios from "axios";
import Header from "./Header";
import {setUsersDataActionCreator} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AuthAPI} from "../../api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {
        AuthAPI.auth()
            .then(data => {
                if(data.resultCode === 0){
                    this.props.setUsersDataActionCreator(data.data.id, data.data.email, data.data.login)
                }
            });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}
let mapStateToProps = (state) =>{
    return({
            isAuth: state.auth.isAuth,
            login: state.auth.login,
            id: state.auth.id,
        }
    )

}

export default connect(mapStateToProps, {setUsersDataActionCreator})(HeaderContainer)