import '../styles/hero.css'
import CtaButton from './CtaButton'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Hero () {
    useEffect(() => {
            Aos.init({
                 duration: 1000,
                 easing: 'ease-out',
                 once: false,
                 offset: 120,
                })
        }, [])

    return (
        <>
            <div className="about_content">
                <h1 className="title">Daily facts that make you go <span className="gradient"> 'huh'</span></h1>
                <p className="subtitle" data-aos="fade-up" data-aos-delay="200">
                    <span>Your attention span is short. </span>
                    <span>Our facts are shorter!</span>
                </p>
                <a href="https://t.me/fact_drop_bot" target='_blank' >
                    <CtaButton text="Start Receiving Facts →" />
                </a>
            </div>

            <div className="floating_facts">
                <span className="fact_bubble top_left">Octopuses have three hearts.</span>
                <span className="fact_bubble top_right dont_show">Bananas are berries, but strawberries aren’t.</span>
                <span className="fact_bubble bottom_left dont_show">The Eiffel Tower can grow 6 inches in summer.</span>
                <span className="fact_bubble bottom_right">A bolt of lightning is 5x hotter than the sun.</span>
            </div>
        </>
    )
}