import App from '../App';
import { useState } from 'react'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header(){

    const [isOpen, setIsOpen] = useState(false); 

    return(
        <>
            <header className="bg-white" style={{ width: '100vw' }}> 
                <div className="flex flex-col">

                     {/* Navigationsmeny */}
                    <nav className="bg-mainBlue relative flex flex-wrap items-center justify-between w-full group p-7 shrink-0 font-extrabold lg:text-2xl ">

                        {/* Logotyp */}
                        <h2>J <span className='text-extraBlue'><FontAwesomeIcon icon={faSearch} /></span> bchaser</h2>  

                        {/* Större skärmar - navigationslänkar */} 
                        <div className="items-center justify-between hidden gap-12 text-black md:flex">
                            <a className="text-lg font-normal text-dark-grey-700 hover:underline" href="javascript:void(0)">Jobs</a>
                            <p>|</p>
                            <a className="text-lg font-normal text-dark-grey-700 hover:underline" href="javascript:void(0)">About</a>
                            <p>|</p>
                            <a className="text-lg font-normal text-dark-grey-700 hover:underline" href="javascript:void(0)">Contact</a>
                        </div>

                         {/* Inloggning och registrering */}
                        <div className="items-center hidden gap-8 md:flex">
                            <button className="flex items-center text-lg font-normal hover:underline">Log In</button>
                            <p>|</p>
                            <button className="flex items-center px-4 py-2 text-lg font-bold hover:underline">
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
                        <div className={` bg-mainBlue flex md:hidden transition-all duration-300 ease-in-out flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden bg-white ${isOpen ? 'max-h-64 py-4' : 'max-h-0 py-0' } px-4 rounded-2xl top-full`}>
                            <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">Jobs</a>
                            <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">About</a>
                            <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">Contact</a>
                            
                            <button className="flex items-center text-sm font-normal text-black">Log In</button>
                            <button className="flex items-center px-4 py-2 text-sm font-bold ">Sign Up</button>
                        </div>
                    </nav>

                      {/* Innehåll */}
                    <div className="grid w-full grid-cols-1 m-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5 p-10">
                        <div className=" text-header flex flex-col justify-center col-span-1 text-center lg:text-start my-6 ml-6">
                            <h1 className=" mb-8 text-4xl font-extrabold lg:text-6xl text-dark-grey-900">Find the job of your <span className="text-extraBlue">Dreams</span></h1>
                            <p className=" text-base font-normal leading-7 lg:w-3/4 text-grey-900">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt placeat nihil eos natus blanditiis doloremque, quas, at dolores quasi iste debitis ullam maxime nulla qui facilis laudantium, sunt rem sit.
                            </p>
                        </div>
                        <div className="items-center justify-end hidden col-span-1 md:flex">
                            <img className="w-full" src="/images/JobChaser.jpg" alt="header image"/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
