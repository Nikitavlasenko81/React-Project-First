import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Field, reduxForm} from "redux-form";

function LoginForm(props) {
    return (
        <form  onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

function Login(props) {

    const onSubmit = (formData) =>{
        console.log(formData)
    }
    return (
        <Container>
            <Row className="justify-content-md-center mt-4">
                <h1>Login</h1>
            </Row>
            <Row className="justify-content-md-center mb-4">
                <LoginReduxForm onSubmit={onSubmit} />
            </Row>
        </Container>
    )
}


export default Login