import React from "react";
import MainNav from "../nav/MainNav";
import FavoriteList from "./favorite list/FavoriteList";
import "./Favorite.css"

const Favorite = ()=> {
    return (
        <section className="favorite_section">
            <MainNav />
            <FavoriteList />
        </section>
    )
}

export default Favorite 

