import React from "react";
import redStar from "../assets/redStar.svg";
import greyStar from "../assets/greyStar.svg";

function Rating({ rating }) {

    const fullRating = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {/* Boucle pour afficher l'étoile par note*/}
            {fullRating.map((score) =>
                rating >= score ? (
                    <img
                        key={score.toString()}
                        className="rating__icon"
                        src={redStar}
                        alt="étoile pleine"
                    />
                ) : (
                    <img
                        key={score.toString()}
                        className="rating__icon"
                        src={greyStar}
                        alt="étoile vide"
                    />
                ))}
        </div>
    );
}

export default Rating;