import '../styles/howitworks.css'
import mac from '../assets/mockups/mac.png'
import iphone from '../assets/mockups/iphone.png'
import samsung from '../assets/mockups/samsung.png'

export default function HowItWorks () {
    return (
        <>
            <h2 className='how_title'>How It Works</h2>

            <div className='mockup_wrapper'>
                <img src={mac} alt="Laptop Chat" className='mockup laptop' />
                <img src={iphone} alt="iPhone Chat" className='mockup iphone' />
                <img src={samsung} alt="Samsung Chat" className='mockup samsung' />
            </div>

            <div className='steps'>
                <div className='step'>👉 Subscribe in seconds</div>
                <div className='step'>📬 Receive a daily “whoa”</div>
                <div className='step'>🤖 Ask for a wild fact anytime</div>
            </div>
        </>
    )
}