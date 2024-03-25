import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth"; // Importera signOut från firebase/auth

function Navigation({ isOpen, setIsOpen }) {

    const handleSignOut = () => {
        signOut(auth)
          .then(() => {
            console.log("User signed out successfully");
            // Additional actions after sign out, such as redirecting to another page
          })
          .catch((error) => {
            console.error("Error signing out:", error);
          });
        }

    return (
        <nav className="relative flex flex-wrap items-center justify-between w-full group p-7 shrink-0 font-extrabold lg:text-2xl ">
            {/* Logotyp */}
            <a href="/">
                <h2>J <span className='text-extraBlue'><FontAwesomeIcon icon={faSearch} /></span> bchaser</h2>
            </a>

            
            {/* Större skärmar - navigationslänkar */}
            <div className="items-center justify-between hidden gap-12 text-black md:flex">
                <a className="text-lg font-normal hover:underline" href="/jobs">jobs</a>
                <p>|</p>
                <a className="text-lg font-normal hover:underline" href="/about">About</a>
                <p>|</p>
                <a className="text-lg font-normal hover:underline" href="/contact">Contact</a>
            </div>

            {/* Inloggning och registrering */}
            <div className="items-center hidden gap-8 md:flex">
                <a className="flex items-center text-lg font-normal hover:underline" href="/login">Log In</a>
                <p>|</p>
                <a className="flex items-center px-4 py-2 text-lg font-bold hover:underline" href="/signup">
                    Sign Up
                </a>
                <button className="text-lg font-bold"  onClick={handleSignOut}>Sign Out</button>
            </div>

            {/* Hamburgermeny-ikon för mindre skärmar */}
            <button onClick={() => setIsOpen(!isOpen)} className="flex md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d={isOpen ? "M6 18L18 6M6 6L18 18" : "M3 8H21M3 13H21M3 18H21"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            {/* Dropdownmeny för mindre skärmar */}
            <div className={`bg-mainBlue flex md:hidden transition-all duration-300 ease-in-out flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden bg-white ${isOpen ? 'max-h-64 py-4' : 'max-h-0 py-0' } px-4 rounded-2xl top-full`}>
                <a className="text-sm font-normal hover:underline" href="/jobs">Jobs</a>
                <a className="text-sm font-normal hover:underline" href="/about">About</a>
                <a className="text-sm font-normal hover:underline" href="/contact">Contact</a>
                
               <a className="flex items-center text-sm font-normal text-black" href="/login" >Log In</a> 
                <a className="text-lg font-bold" href="/signup">Sign Up</a>
                <button className="text-lg font-bold"  onClick={handleSignOut}>Sign Out</button>
            </div>
        </nav>
    );
}

export default Navigation;
