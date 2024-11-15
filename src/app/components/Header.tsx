'use client'
import React, { useEffect, useState } from 'react'
import UserProfile from './UserProfile';
import Logo from './Logo';

const NavLinks = () => {
    return (
        <nav>
            <ul className='hidden md:flex md:space-x-4'>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Latest</li>
            </ul>
        </nav>
    )
}


const useScroll = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return isScrolled;
}


export default function Header() {
    const isScrolled = useScroll()

    return (
        <header className={`
        ${isScrolled && 'bg-black'} 
        fixed top-0 z-50  flex items-center justify-between  w-full p-2 transition-all lg:px-10 lg:py-4`}>
            <div className='flex items-center space-x-2 md:space-x-8'>
                <Logo />
                <NavLinks />
            </div>
            <UserProfile />
        </header>
    )
}
