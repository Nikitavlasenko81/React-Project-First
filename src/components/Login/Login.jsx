import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {required} from "../../utils/validators/validators";

function LoginForm(props) {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Field placeholder={"Login"} name={"login"} type={"email"} validate={[required]} component={Input}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Field placeholder={"Login"} name={"password"} type={"password"}  validate={[required]} component={Input}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                {/*<Form.Check type="checkbox" label="Check me out" />*/}
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
            </Form.Group>
            <Button type="submit" variant="primary" type="submit" size="lg" block>
                Submit
            </Button>
        </Form>
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