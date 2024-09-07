import { useState } from 'react';
import sw from '/assets/sw.png';


function Tabs() {
    return (
        <>
            <nav className="navbar-canvas flex justify-between items-center max-w-full z-50 py-3 px-5 sticky top-0 left-0 right-0 w-full">
                <div>
                    <img src={sw} alt="" className="w-8 h-8"/>
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
        <div className="navbar-menu hidden lg:flex gap-5 text-[#333] font-medium font-inter">
            <a href="#" className=''>Home</a>
            <a href="#" className=''>Rules</a>
            <a href="#" className=''>Discord</a>
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
                <span className='block w-full h-1 bg-[#333] transition-all duration-300'></span>
                <span className='block w-full h-1 bg-[#333] transition-all duration-300'></span>
                <span className='block w-full h-1 bg-[#333] transition-all duration-300'></span>
            </button>
                <div className={bar ? 'dropdown-menu' : 'hidden'}>
                    <a href="#" className=''>Home</a>
                    <a href="#" className=''>Rules</a>
                    <a href="#" className=''>Discord</a>
                </div>
        </div>
    )
}

export default Tabs;