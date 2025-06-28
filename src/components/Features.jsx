import '../styles/features.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


export default function Features () {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <>
            <h2 className='features_title'>What the Bot Can Do</h2>

            <ul className='cards'>
                <li className='cards_item' data-aos="fade-up" data-aos-delay="100">
                    <div className='card'>
                        <div className='card_content'>
                            <div className='emoji'>💡</div>
                            <h3>Daily Facts</h3>
                            <p>Get one mind-blowing fact everyday, no fluff, no filler.</p>
                        </div>
                    </div>
                </li>

                <li className='cards_item' data-aos="fade-up" data-aos-delay="200">
                    <div className='card'>
                        <div className='card_content'>
                            <div className='emoji'>⚡</div>
                            <h3>Instant Access</h3>
                            <p>Use <code>/random</code> to summon a fact anytime.</p>
                        </div>
                    </div>
                </li>

                <li className='cards_item' data-aos="fade-up" data-aos-delay="300">
                    <div className='card'>
                        <div className='card_content'>
                            <div className='emoji'>📚</div>
                            <h3>Topics on Tap</h3>
                            <p>Get facts by category — from weird science to odd history.</p>
                        </div>
                    </div>
                </li>

                <li className='cards_item' data-aos="fade-up" data-aos-delay="400">
                    <div className='card'>
                        <div className='card_content'>
                            <div className='emoji'>🕒</div>
                            <h3>Set Your Time</h3>
                            <p>Choose when the bot drops your daily dose of trivia.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}