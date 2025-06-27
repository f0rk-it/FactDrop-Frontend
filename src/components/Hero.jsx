import '../styles/hero.css'
import CtaButton from './CtaButton'

export default function Hero () {
    return (
        <>
            <div className="about_content">
                <h1 className="title">Daily facts that make you go <span className="gradient"> 'huh'</span></h1>
                <p className="subtitle">
                    <span>Your attention span is short. </span>
                    <span>Our facts are shorter!</span>
                </p>

                <CtaButton text="Start Receiving Facts →" />
            </div>

            <div className="floating_facts">
                <span className="fact_bubble top_left">Octopuses have three hearts.</span>
                <span className="fact_bubble top_right">Bananas are berries, but strawberries aren’t.</span>
                <span className="fact_bubble bottom_left">The Eiffel Tower can grow 6 inches in summer.</span>
                <span className="fact_bubble bottom_right">A bolt of lightning is 5x hotter than the sun.</span>
            </div>
        </>
    )
}