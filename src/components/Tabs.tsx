import { useEffect, useState } from 'react';
import sw from '/assets/sw.png';

import { CSSTransition } from 'react-transition-group';

function Tabs() {
    return (
        <>
            <nav className="navbar-canvas flex justify-between items-center max-w-full z-50 p-[12px] fixed w-full">
                <div>
                    <img src={sw} alt="" className="w-12 h-12"/>
                </div>
                <NavbarMenu/>
                <DropdownMenu/>
            </nav>
        </>
    );
}

// For Desktop
function NavbarMenu() {
    return (
        <div className="navbar-menu hidden lg:flex gap-5 text-[#ddd] font-medium font-inter">
            <a href="#" className=''>Home</a>
            <a href="#" className=''>Announcement</a>
            <a href="#" className=''>Rules</a>
            <a href="#" className=''>Server</a>
            <a href="#" className=''>Blogs</a>
        </div>
    )
}

// For Mobile
function DropdownMenu() {
    const [bar, setBar] = useState(false)

    const openBar = () => {
        setBar(!bar)
    }

    return (
        <div className="flex lg:hidden gap-5 text-[#ddd] font-medium font-inter items-center">
            <button className='lg:hidden flex flex-col justify-between h-5 w-7' id="navToggle" onClick={openBar}>
                <span className='block w-full h-1 bg-white transition-all duration-300'></span>
                <span className='block w-full h-1 bg-white transition-all duration-300'></span>
                <span className='block w-full h-1 bg-white transition-all duration-300'></span>
            </button>
                <div className={bar ? 'hidden' : 'dropdown-menu'}>
                    <a href="#">Home</a>
                    <a href="#">Announcement</a>
                    <a href="#">Rules</a>
                    <a href="#">Server</a>
                    <a href="#">Blogs</a>
                </div>
        </div>
    )
}

export default Tabs;