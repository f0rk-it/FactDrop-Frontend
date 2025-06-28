import Navbar from "../components/NavBar";
import '../styles/landingpage.css'
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";

export default function LandingPage () {
    return (
        <>
            <Navbar />

            <section id="about">
                <Hero />
            </section>

            <section id="how_it_works">
                <HowItWorks />
            </section>

            <section id="features"></section>

            <section id="snippets"></section>

            <section id="footer"></section>
        </>
    )
}