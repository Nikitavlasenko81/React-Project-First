import React from 'react';
import * as axios from "axios";
import Header from "./Header";
import {setUsersDataActionCreator} from "../../Redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`,{
            withCredentials: true,
        })
            .then(response => {
                if(response.data.resultCode === 0){
                    this.props.setUsersDataActionCreator(response.data.data.id, response.data.data.email, response.data.data.login)
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
        }
    )

}

export default connect(mapStateToProps, {setUsersDataActionCreator})(HeaderContainer)