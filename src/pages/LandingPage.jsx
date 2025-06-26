import Navbar from "../components/NavBar";
import '../styles/landingpage.css'
import CtaButton from "../components/CtaButton";

export default function LandingPage () {
    return (
        <>
            <Navbar />

            <section id="about">
                <div className="about_content">
                    <h1 className="title">Daily facts that make you go <span className="gradient"> 'huh'</span></h1>
                    <p className="subtitle">
                        <span>Your attention span is short. </span>
                        <span>Our facts are shorter!</span>
                    </p>

                    <CtaButton text="Start Receiving Facts →" />
                </div>

                <div className="floating_icons">
                    <span className="icon brain">🧠</span>
                    <span className="icon lightbulb">💡</span>
                    <span className="icon explode">🤯</span>
                    <span className="icon zap">⚡</span>
                </div>
            </section>

            <section id="how_it_works"></section>

            <section id="features"></section>

            <section id="snippets"></section>

            <section id="footer"></section>
        </>
    )
}