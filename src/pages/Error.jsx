import React from "react";
import { Link } from "react-router-dom";
//import image from "../assets/logo-error.png";

function Error() {
    return (
        <main className="error">
            {/* <img src={image} alt="404" className="error-logo" /> */}
            <p className="error__logo">
                404
            </p>

            <p className="error__text">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/" className="error__link">
                Retourner sur la page d'accueil
            </Link>
        </main>
    );
};

export default Error;