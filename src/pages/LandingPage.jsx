import Navbar from "../components/NavBar";
import '../styles/landingpage.css'
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import WhyChooseUs from "../components/WhyChooseUs";

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

            <section id="features" className="notebook_style">
                <Features />
            </section>

            <section id="why_choose_us">
                <WhyChooseUs />
            </section>
        </>
    )
}