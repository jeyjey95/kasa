import React from "react";
import Vector from "../assets/Vector.svg";
import { createRef, useState } from 'react';

function Collapse({ title, description, equipements }) {
    // const isCollapse = (e) => {
    //     e.preventDefault();
    //     const divText = e.target.nextSibling;
    //     const arrow = e.target.lastChild;
    //     if (!divText.classList.contains("show")) {
    //         divText.classList.add("show");
    //         height: collapse.current.scrollHeight;
    //         arrow.classList.add("rotate");
    //     } else {
    //         divText.classList.remove("show");
    //         arrow.classList.remove("rotate");
    //     }
    const [toggle, setToggle] = useState({ height: 0, opacity: 0 });

    //Definie la valeur de l'état à false à l'objet activated
    const [activated, setActive] = useState(false);

    //Definie la fonction createRef de react dans la constante collapse
    const collapse = createRef();

    /*Si l'objet activated est à son contraire: toggle prend pour valeur (setToggle) la hauteur de reference du contenu et une opacité de 1. 
    et set active prend la valeur (setActive) false.*/
    //Sinon toogle prend la hauteur 0 et l'opacité 0 et active prend la valeur false.
    const setCollapse = () => {
        if (!activated) {
            setToggle({ height: collapse.current.scrollHeight, opacity: 1 });
            setActive(true);
        } else {
            setToggle({ height: 0, opacity: 0 });
            setActive(false);
        }
    };
    return (
        <section className="collapse">
            <button type="button" className="collapse__button" onClick={() => setCollapse()}>
                {title}
                <img src={Vector} alt="" className="collapse__arrow" />
            </button>
            <div className="collapse__content" style={toggle} ref={collapse}>
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