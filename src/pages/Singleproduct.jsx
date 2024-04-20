import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/data.json";

import Error from "../pages/Error";
import Rating from "../components/Rating";
import Server from "../components/Server";
import Slider from "../components/Slider";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";


function SingleProduct() {
    const params = useParams();
    const product = products.find((product) => product.id === params.id);

    if (!product) return <Error />;

    const { title, location, rating, host, equipments, description, pictures } = product;



    return (
        <main className="singleproduct">
            <Slider slides={pictures} />
            <div className="singleproduct__content">
                <div className="singleproduct__informations">
                    <h1 className="singleproduct__title">{title}</h1>
                    <p className="singleproduct__location">{location}</p>
                    <div className="singleproduct__tags">
                        {product.tags?.map((tag, index) => (
                            <Tags key={index} getTag={tag} />
                        ))}
                    </div>
                </div>
                <div className="singleproduct__rating-and-host">
                    <Rating rating={rating} />
                    <Server host={host} />
                </div>
            </div>
            <div className="singleproduct__dropdowns">
                <Collapse title="Description" description={description} />
                <Collapse title="Équipements" equipements={equipments} />
            </div>

        </main>

    )
}

export default SingleProduct;