import React from "react";
import marketdata from "../data/aboutData";
import Mainbanner from "../components/Mainbanner";
import image from "../assets/banner.png";
import Realestate from "../components/Realestate";

const slogan = marketdata.slogan;

const Home = () => {
    return (
        <main className="main">
            <Mainbanner image={image} title={slogan} />
            <Realestate />
        </main>
    );
};

export default Home;