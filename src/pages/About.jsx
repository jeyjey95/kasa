import Banner from "../components/Banner";
import aboutData from "../data/aboutData";
import Collapse from "../components/Collapse";
import imageBanner from "../assets/aboutbannerDesktop.png";

function About() {
    // Basculer pour afficher le contenu dans la liste déroulante par titre
    function description(title) {
        switch (title) {
            case "fiability":
                return aboutData.fiability;
            case "respect":
                return aboutData.respect;
            case "service":
                return aboutData.service;
            case "sécurity":
                return aboutData.security;
            default:
                console.log("default");
                break;
        }
    };
    return (
        <main className="main">
            <section className="about">
                <Banner image={imageBanner} />
                <div className="about__dropdowns">
                    <Collapse title="Fiabilité" description={description("fiability")} />
                    <Collapse title="Respect" description={description("respect")} />
                    <Collapse title="Service" description={description("service")} />
                    <Collapse title="Sécurité" description={description("sécurity")} />
                </div>
            </section>
        </main>
    );
};

export default About;