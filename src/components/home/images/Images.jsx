import React, { useEffect, useRef, useState } from "react";
import "./Images.css";
import { useDispatch, useSelector } from "react-redux";
import getImages from "../../../redux/actions/getImages.Action";
import Modal from "./modal/Modal";
import Loading from "../../loading/Loading";

const Images = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  dispatch(getImages());

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const sentinel = useRef();

  const { images_list } = useSelector((state) => state.getImagesReducer);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="images_container">
        <div className="line_container">
          {images_list === undefined
            ? ""
            : images_list
                .filter((each, index) => index % 3 === 0)
                .map((image) => {
                  return (
                    <Modal
                      name={image.user.name}
                      id={image.id}
                      url1={image.urls.small}
                      url2={image.urls.thumb}
                      description1={image.alt_description}
                      description2={image.description}
                      likes={image.likes}
                    />
                  );
                })}
        </div>
        <div className="line_container">
          {images_list === undefined
            ? ""
            : images_list
                .filter((each, index) => index % 3 === 1)
                .map((image, index) => {
                  return (
                    <Modal
                      name={image.user.name}
                      id={image.id}
                      url1={image.urls.small}
                      url2={image.urls.thumb}
                      description1={image.alt_description}
                      description2={image.description}
                      likes={image.likes}
                    />
                  );
                })}
        </div>
        <div className="line_container">
          {images_list === undefined
            ? ""
            : images_list
                .filter((each, index) => index % 3 === 2)
                .map((image) => {
                  return (
                    <Modal
                      name={image.user.name}
                      id={image.id}
                      url1={image.urls.small}
                      url2={image.urls.thumb}
                      description1={image.alt_description}
                      description2={image.description}
                      likes={image.likes}
                    />
                  );
                })}
        </div>
        <div ref={sentinel} className="sentinel"></div>
      </div>
    );
  }
};

export default Images;
