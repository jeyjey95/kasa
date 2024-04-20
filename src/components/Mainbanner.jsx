import React from "react";

function Mainbanner({ image, title }) {
    return (

        <section className="homeBanner">
            <img src={image} alt="Paysage" className="thunb__img" />
            <div className="homeBanner__overlay"></div>
            <span className="homeBanner__title">{title}</span>
        </section >

    );
};

export default Mainbanner;