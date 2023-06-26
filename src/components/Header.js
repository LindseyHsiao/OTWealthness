
import odalyLogo from '../assets/images/OdalyLogo.png'
import {useState} from 'react';

export default function Header() {
const [toggle, setToggle] = useState(false)

    return (
        <section className="bg-neutral-50">
        {/* <!-- Hero --> */}
        <div className="max-w-6xl mx-auto px-6 py-6">
            {/* <!-- Menu/Logo Container --> */}
            <nav className="flex items-center justify-between font-bold text-black">
            <div className="hidden h-10 md:flex md:space-x-8">
                    <div className="group">
                        <a href="/About">About</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-amber-700"></div>
                    </div>
                    <div className="group">
                        <a href="/Events">Services</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-amber-700"></div>
                    </div>
                </div>
                {/* <!-- Logo --> */}
                <a href="/"><img className="h-28" src={odalyLogo} alt="OT Wealthness logo" /></a>
                {/* <!-- Menu --> */}
                <div className="hidden h-10 md:flex md:space-x-8">
                    <div className="group">
                        <a href="/Contact">Contact</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-amber-700"></div>
                    </div>
                    <div className="group">
                        <a href="/Events">Blog</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-amber-700"></div>
                    </div>
                </div>
                {/* <!-- hamburger button  --> */}
                <div className="md:hidden">
                    <button id="menu-btn" type="button" className={toggle ? "z-40 block hamburger md:hidden focus:outline-none open" : "z-40 block hamburger md:hidden focus:outline-none"} onClick={()=> setToggle(!toggle)}>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
            </nav>
            {/* <!-- mobile menu --> */}
            <div id="menu" className={toggle ? "absolute top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-neutral-50 uppercase bg-amber-700" : "absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-neutral-50"}>
                <a href="/Events" className="hover:text-pink-500">Services</a>
                <a href="/Lessons" className="hover:text-pink-500">Contact</a>
                <a href="/Listen" className="hover:text-pink-500">Blog</a>
                <a href="/About" className="hover:text-pink-500">About</a>
            </div>

            
        </div>
    </section>
    )
}