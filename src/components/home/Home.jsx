import React from "react";
import "./Home.css"

//Components
import MainNav from "../nav/MainNav";
import Images from "./images/Images"

const Home = ()=> {

    return (
        <section className="home_container">
            <MainNav />
            <Images />
        </section>
    )

}

export default Home