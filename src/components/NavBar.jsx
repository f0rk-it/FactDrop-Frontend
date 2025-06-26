import '../styles/navbar.css'
import Logo from '../assets/FactDrop.svg'
import CtaButton from './CtaButton'
import { useEffect, useState } from 'react'

export default function Navbar () {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav id='navbar' className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className='navbar_left'>
                <a href="/">
                    <img src={Logo} alt="FactDrop Logo" className='navbar_logo' />
                    <span className='navbar_brand'>FactDrop</span>
                </a>
            </div>

            <div className='navbar_center'>
                <a href="#about" className='navbar_link'>About</a>
                <a href="#how_it_works" className='navbar_link'>How It Works</a>
                <a href="#features" className='navbar_link'>Features</a>
            </div>

            <div className='navbar_right'>
                <CtaButton text="Start Receiving Facts" />
            </div>
        </nav>
    )
}