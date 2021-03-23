import './App.css';
import React, {Component, Suspense} from "react";
import "./App.css";
import News from "./components/News/News";
import Music from "./components/Music/Music";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Navigation from "./components/Navigation/Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {initializeApp} from "./Redux/app-reducer";
import Spinner from "react-bootstrap/Spinner";
import store from "./Redux/redux-store";
import withSuspense from "./hoс/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
            if(!this.props.initialized) {
                return(
                    <Row className = {"justify-content-center"} >
                        <Spinner animation="grow"/>
                    </Row>
                    )
            }
        return (
            <Container>
                <Row className="header">
                    <Col>
                        <HeaderContainer/>
                    </Col>
                </Row>
                <Row className={"mt-3"}>
                    <Col sm={3} lg={2}>
                        <Navigation/>
                    </Col>
                    <Col sm={9} lg={10} className="page">
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>                                {/* used here lazyLoad end Suspense in hoc */}
                        <Route path="/profile/:userId?" render={() => <ProfileContainer store={this.props.store}/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </Col>
                </Row>
            </Container>

        );
    }
}
const mapStateToProps = (state)=>{
    return({
        initialized: state.app.initialized
    })
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
    (App);

const SocialNetworkApp = ()=>{
   return(
       <BrowserRouter>
           <Provider store={store}>
               <React.StrictMode>
                   {/*<App dispatch = {store.dispatch.bind(store)} store = {store}/>*/}
                   <AppContainer dispatch = {store.dispatch.bind(store)} store = {store}/>
               </React.StrictMode>,
           </Provider>
       </BrowserRouter>
       )
}
export default SocialNetworkApp