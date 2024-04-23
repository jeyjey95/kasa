import React from "react";
import Vector from "../assets/Vector.svg";
import { createRef, useState } from 'react';

function Collapse({ title, description, equipements }) {
    const [heightCollapse, setHeightCollapse] = useState({ height: 0, opacity: 0 });

    const [class_arrow, setClass_arrow] = useState("collapse__arrow");

    //Definie la valeur de l'état à false à l'objet activated
    const [activated, setActive] = useState(false);

    //Definie la fonction createRef de react dans la constante collapse
    const collapse = createRef();

    // if (activated) {
    //     var arrow = "rotate collapse__arrow";
    // }
    // else {
    //     var arrow = "collapse__arrow"
    // }

    const setCollapse = () => {
        if (!activated) {
            setHeightCollapse({ height: collapse.current.scrollHeight, opacity: 1 });
            setClass_arrow("collapse__arrow rotate");
            setActive(true);

        } else {
            setHeightCollapse({ height: 0, opacity: 0 });
            setClass_arrow("collapse__arrow");
            setActive(false);
        }
    };

    return (
        <section className="collapse">
            <button type="button" className="collapse__button" onClick={() => setCollapse()}>
                {title}
                <img src={Vector} alt="" className={class_arrow} />
            </button>
            <div className="collapse__content" style={heightCollapse} ref={collapse}>
                {Array.isArray(equipements) ? (
                    <ul className="collapse__list">
                        {equipements?.map((equipements, index) => (
                            <li key={index} className="collapse__list-element">{equipements}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="collapse__text">{description} </p>
                )}
            </div>
        </section>
    );
};

export default Collapse;