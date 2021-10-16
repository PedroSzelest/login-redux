import React, { useState, useEffect } from "react";
import "./FavoriteList.css";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../loading/Loading";
import { removeFavorite } from "../../../redux/actions/favorite.Action";
import { Link } from "react-router-dom";

const FavoriteList = ()=> {
    const { favorite_list } = useSelector( state => state.setFavoriteReducer )

    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    useEffect(()=> {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
        }, 500)
    }, [])

    const createFavoriteElement = ()=> {
        if(favorite_list.length === 0) {
            return (
                <div className="no_items">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <h4>There is no items in your favorite section</h4>
                    </Link>
                </div>
            )
        } else {
            return(
                favorite_list.map( each => (
                    <div className="favorite_element_container">
                        <div className="favorite_image_container">
                            <img src={each.url2} alt={each.descriptio1 === null ? each.descriptio2 : each.descriptio1} />
                            <legend>{each.description1 === null ? each.description2 : each.description1}</legend>
                        </div>
                        <div className="favorite_data_container">
                            <p>{`Made by: ${each.name}`}</p>
                            <p className="favorite_rating">rating: {each.likes}<i class="fas fa-heart red"></i></p>
                            <button className="remove_button" onClick={()=> dispatch(removeFavorite(each.id))}>Remove from favorite</button>
                        </div>
                    </div>
                ))
            )
        }
    }
    
    if (loading) {
        return (
            <Loading />
        )
    } else {
        return (
            <main className="main_favorite-list_container">
                {createFavoriteElement()}
            </main>
        )
    }

}

export default FavoriteList