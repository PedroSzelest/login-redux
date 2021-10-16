import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../../../redux/actions/favorite.Action";
import "./Modal.css";

const Modal = ({ name, id, url1, url2, description1, description2, likes })=> {
    const [modal, setModal] = useState(false)
    const [updateFavorite, setUpdateFavorite] = useState(false)

    const { favorite_list } = useSelector( state => state.setFavoriteReducer )

    const dispatch = useDispatch()

    const handleModal = ()=> setModal(!modal)

    const handleAddFavorite = ()=> {
        dispatch(addFavorite({ name, url2, description1, description2, likes, id }))
        setUpdateFavorite(true)
    }

    const handleRemoveFavorite = ()=> {
        dispatch(removeFavorite(id))
        setUpdateFavorite(false)
    }

    return (
        <div className="each_image" key={id} onClick={handleModal}>
            <img src={url1} alt={description1 === null ? description2 : description1} />
            <legend>{`By: ${name}`} <i class={`fas fa-star ${updateFavorite}`}></i></legend>
            <div className={`modal_background ${modal}`}>
                <div className="modal_container">
                    <div className="modal_image_container">
                        <img src={url2} alt="" />
                    </div>
                    <div className="modal_data_container">
                        <p>{description1 === null ? description2 : description1}</p>
                        <div className="rating_container">
                            <p>rating: {likes}<i class="fas fa-heart red"></i></p>
                            <p><i className={`fas fa-star ${updateFavorite}`}></i></p>
                            <button className="add_button" onClick={handleAddFavorite}>Add to favorite</button>
                            <button className="remove_button" onClick={handleRemoveFavorite}>Remove from favorite</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal