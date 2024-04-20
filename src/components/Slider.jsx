import React, { useState } from "react";
import left from "../assets/arrowLeft.svg";
import right from "../assets/arrowRight.svg";

function Slider({ slides }) {
    const length = slides.length;
    const onePicture = length <= 1;

    // on définit l'index de la 1ere slide
    const [current, setCurrent] = useState(0);

    // Si : la photos est la dernière (length -1),
    // On passe à la 1ere (0),
    // Sinon : on passe à la prochaine (+1)
    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    // Si: la photos est la première (0),
    // On passe à la dernière (length -1),
    // Sinon: on passe à la précédente (-1)
    function prevSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className="slider">
            {slides?.map((picture, index) => {
                return (
                    <div key={index} className={index === current ? "slider__active-picture" : "slider__inactive-picture"} >
                        {index === current && (
                            <img src={picture} alt="" className="slider__picture" />
                        )}{""}
                    </div>
                );
            })}
            {/* Obtenir le buton s'il y a plus d'une photo */}
            {length > 1 ? (
                <>
                    <span
                        className={onePicture ? "no-arrow" : "arrow arrowLeft"}
                        onClick={prevSlide}>
                        <img src={left} alt="previous" />
                    </span>
                    <span
                        className={onePicture ? "no-arrow" : "arrow arrowRight"}
                        onClick={nextSlide}>
                        <img src={right} alt="next" />
                    </span>
                    <span className="page-count">
                        {current + 1} / {length}
                    </span>
                </>
            ) : null}
        </div>
    );

};

export default Slider;