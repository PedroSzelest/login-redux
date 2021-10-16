import React from "react";
import MainNav from "../nav/MainNav";
import "./Logout.css"

const Logout = ()=> {
    return (
        <section className="logout_container">
            <MainNav />
            <div className="logout_body">
                <div className="logout_form"></div>
            </div>
        </section>       
    )
}

export default Logout