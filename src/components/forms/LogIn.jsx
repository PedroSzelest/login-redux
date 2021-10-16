import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Link } from "react-router-dom";

//Redux
import { loginWithGoogleFirebase, loginWithEmail } from "../../redux/actions/user.Action";

const LogIn = ()=> {
    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState({ email: "", password: "" });

    const handleEmailLogin = e => {
        e.preventDefault()
        dispatch(loginWithEmail(loginData));
    };

    const handleGoogleLogin = ()=> {
        dispatch(loginWithGoogleFirebase(loginData));
    };


    return (
        <div className="w-100" style={{ maxWidth: "400px"}}>
            <Form>
                <h3>Log In</h3>
                <Form.Group>
                    <Form.Label>Email adress</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    onChange={({ target })=> setLoginData({ ...loginData, email: target.value })}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password"
                    onChange={({ target })=> setLoginData({ ...loginData, password: target.value })}/>
                </Form.Group>
                <div className="h-100 d-flex justify-content-between align-items-center flex-column">
                    <Button 
                    type="bumit"
                    className="w-50 m-2" 
                    onClick={handleEmailLogin}>Log In</ Button>
                    <Button variant="outline-info" className="w-50" onClick={handleGoogleLogin}>google</Button>
                    <h4 className="signup_text">Don't you have an account? Sign Up below</h4>
                    <Link to="/signup">
                        <Button>Sign Up</Button>
                    </Link>
                </div>
            </Form>
        </div>
    )
}

export default LogIn