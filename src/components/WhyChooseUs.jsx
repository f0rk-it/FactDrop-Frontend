import '../styles/whychooseus.css'
import { useEffect, useRef, useState } from 'react'
import CtaButton from './CtaButton'
import { FaGithub, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'

const stats = [
    { label: 'Subscribers', end: 5321 },
    { label: 'Facts Requested', end: 23012 },
    { label: 'Messages Sent', end: 18076 },
]

const testimonials = [
    '“Every day I get a fact that blows my mind before coffee. 10/10.”',
    '“Better than Wikipedia. Shorter. Sassier. Smarter.”',
    '“I don’t trust people who don’t use this bot. Period.”',
    '“This bot makes me look smart in meetings.”',
]

export default function WhyChooseUs () {
    const countersRef = useRef([])
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (!hasAnimated && entries.some((e) => e.isIntersecting)) {
                    countersRef.current.forEach((el, index) => {
                        animateCounter(el, stats[index].end, 1500)
                    })
                    setHasAnimated(true)
                }
            },
            { threshold: 0.5 }
        )

        countersRef.current.forEach((el) => {
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [hasAnimated])

    function animateCounter(el, target, duration) {
        let start = 0
        const increment = Math.ceil(target / (duration / 30))
        const counter = setInterval(() => {
            start += increment
            if (start >= target) {
                start = target
                clearInterval(counter)
            }
            el.innerText = start.toLocaleString()
        }, 30)
    }

    return (
        <>
            <h2 className='section_title'>Why Choose Us</h2>

            <div className='testimonial_slider'>
                <div className='slider_track'>
                    {testimonials.concat(testimonials).map((quote, i) => (
                        <div key={i} className='testimonials'>{quote}</div>
                    ))}
                </div>
            </div>

            <div className='stats_counter'>
                {stats.map((stat, i) => (
                    <div key={i} className='stat_box'>
                        <div className='stat_number' ref={(el) => countersRef.current[i] = el}>0</div>
                        <div className='stat_label'>{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className='feedback_form'>
                <h3>Got Something to say?</h3>
                <form>
                    <input type="text" placeholder='Your Name' required />
                    <textarea placeholder='Your feedback...' required></textarea>
                    <CtaButton text="Submit" />
                </form>
            </div>

            <footer className='footer'>
                <p>© {new Date().getFullYear()} FactDrop • Built by f0rk_it🌵</p>

                <div className='social_icons'>
                    <a href="https://github.com/f0rk-it" target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
                        <FaGithub className='icon' />
                    </a>
                    <a href="https://x.com/f0rk_it" target='_blank' rel='noopener noreferrer' aria-label='Twitter/X'>
                        <FaXTwitter className='icon' />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=2349132135506" target='_blank' rel='noopener noreferrer' aria-label='WhatsApp'>
                        <FaWhatsapp className='icon' />
                    </a>
                </div>
            </footer>
        </>
    )
}