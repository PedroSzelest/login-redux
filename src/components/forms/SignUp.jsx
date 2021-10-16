import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";
import "./Login.css";

//Redux 
import { registerWithEmail } from "../../redux/actions/user.Action";

const SignUp = ()=> {
    const dispatch = useDispatch()

    const [userData, setUserData] = useState({
        displayName: "",
        email: "",
        password: ""
    })

    const handleSignUp = e => {
        e.preventDefault()
        console.log(userData)
        dispatch(registerWithEmail(userData))
    }

    return (
        <div className="w-100" style={{ maxWidth: "400px"}}>
            <Form onClick={handleSignUp}>
                <h3>Sign Up</h3>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                    type="text" 
                    placehoder="Username"
                    onChange={({ target })=> setUserData({ ...userData, displayName: target.value })}/>   
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email adress</Form.Label>
                    <Form.Control 
                    type="email" 
                    placehoder="Enter email"
                    onChange={({ target })=> setUserData({ ...userData, email: target.value })}/>   
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placehoder="Password"
                    onChange={({ target })=> setUserData({ ...userData, password: target.value })}/>   
                </Form.Group>
                <div className="d-flex justify-content-between align-items-center flex-column">
                    <Button 
                    type="submit" 
                    className="w-50 m-2"
                    >Sign Up</Button>
                </div>
                <h4 className="login_text">Do you already have an account? Log In below</h4>
                <Link to="/login" className="login_link">
                    <Button>Log In</Button>
                </Link>
            </Form>
        </div>
    )
}

export default SignUp