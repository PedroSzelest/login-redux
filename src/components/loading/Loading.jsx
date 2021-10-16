import React from "react";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

const Loading = ()=> {
    return (
        <div className="loading">
            <Spinner
            animation="border"
            role="status"
            className="spinner_loading"
            >
                <span className="visually-hidden"></span>
            </Spinner>
        </div>
    )
}

export default Loading