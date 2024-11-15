'use client'
import UserProfile from './UserProfile';
import Logo from './Logo';
import NavLinks from './NavLinks';
import useScroll from '../hooks/useScroll';

export default function Header() {
    const isScrolled = useScroll()

    return (
        <header className={`
        ${isScrolled && 'bg-black'} 
        fixed top-0 z-50 
        flex items-center justify-between bg-gradient-to-t from-transparent to-to-black p-2 px-4 w-full transition-all lg:px-16 lg:py-4`}>
            <div className='flex items-center space-x-2 md:space-x-8'>
                <Logo />
                <NavLinks />
            </div>
            <UserProfile />
        </header>
    )
}
