import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navigation({ isOpen, setIsOpen }) {
    return (
        <nav className="relative flex flex-wrap items-center justify-between w-full group p-7 shrink-0 font-extrabold lg:text-2xl text-dark-grey-700text-dark-grey-700  ">
            {/* Logotyp */}
            <a href="/homepage">
                <h2>J <span className='text-extraBlue'><FontAwesomeIcon icon={faSearch} /></span> bchaser</h2>
            </a>

            
            {/* Större skärmar - navigationslänkar */}
            <div className="items-center justify-between hidden gap-12 text-black md:flex">
                <a className="text-lg font-normal text-dark-grey-700 hover:underline" href="/homepage">Jobs</a>
                <p>|</p>
                <a className="text-lg font-normal text-dark-grey-700 hover:underline" href="/about">About</a>
                <p>|</p>
                <a className="text-lg font-normal text-dark-grey-700 hover:underline" href="/contact">Contact</a>
            </div>

            {/* Inloggning och registrering */}
            <div className="items-center hidden gap-8 md:flex">
                <button className="flex items-center text-lg font-normal text-dark-grey-700 hover:underline">Log In</button>
                <p>|</p>
                <button className="flex items-center px-4 py-2 text-lg text-dark-grey-700 font-bold hover:underline">
                    Sign Up
                </button>
            </div>

            {/* Hamburgermeny-ikon för mindre skärmar */}
            <button onClick={() => setIsOpen(!isOpen)} className="flex md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d={isOpen ? "M6 18L18 6M6 6L18 18" : "M3 8H21M3 13H21M3 18H21"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            {/* Dropdownmeny för mindre skärmar */}
            <div className={`bg-mainBlue flex md:hidden transition-all duration-300 ease-in-out flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden bg-white ${isOpen ? 'max-h-64 py-4' : 'max-h-0 py-0' } px-4 rounded-2xl top-full`}>
                <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="/homepage">Jobs</a>
                <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="/about">About</a>
                <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="/contact">Contact</a>
                
                <button className="flex items-center text-sm font-normal text-black">Log In</button>
                <button className="flex items-center px-4 py-2 text-sm font-bold ">Sign Up</button>
            </div>
        </nav>
    );
}

export default Navigation;
