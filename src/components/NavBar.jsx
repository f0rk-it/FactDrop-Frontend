import '../styles/navbar.css'
import Logo from '../assets/FactDrop.svg'
import CtaButton from './CtaButton'
import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Navbar () {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
            Aos.init({
                 duration: 1000,
                 easing: 'ease-out',
                 once: false,
                 offset: 120,
                })
        }, [])

    return (
        <nav id='navbar' className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className='navbar_left' data-aos="fade-right">
                <a href="/">
                    <img src={Logo} alt="FactDrop Logo" className='navbar_logo' />
                    <span className='navbar_brand'>FactDrop</span>
                </a>
            </div>

            <div className='navbar_center' data-aos="fade-down">
                <a href="#about" className='navbar_link'>About</a>
                <a href="#how_it_works" className='navbar_link'>How It Works</a>
                <a href="#features" className='navbar_link'>Features</a>
                <a href="#why_choose_us" className='navbar_link'>Why Choose Us</a>
            </div>

            <div className='navbar_right' data-aos="fade-left">
                <CtaButton text="Start Receiving Facts" className="navbar_btn" />
            </div>
        </nav>
    )
}