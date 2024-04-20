import React from "react";

function Banner({ image, text }) {
    return (
        <div className="banner">
            <img src={image} alt="" className="banner__img" />
            <div className="banner__overlay">
                {text ? <h1 className="banner__text">{text}</h1> : null}
            </div>
        </div>
    )
}

export default Banner;