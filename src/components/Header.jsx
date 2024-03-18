import React, { useState } from 'react';
import Navigation from './Navbar'; 


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white" style={{ width: '100vw' }}>
            <div className="flex flex-col">
                {/* Navigationsmeny */}
                <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />

                {/* Innehåll */}
                <div className="grid w-full grid-cols-1 m-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5 p-10">
                    <div className="text-header flex flex-col justify-center col-span-1 text-center lg:text-start my-6 ml-6">
                        <h1 className="mb-8 text-4xl font-extrabold lg:text-6xl text-dark-grey-900">Find the job of your <span className="text-extraBlue">Dreams</span></h1>
                        <p className="text-base font-normal leading-7 lg:w-3/4 text-grey-900">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt placeat nihil eos natus blanditiis doloremque, quas, at dolores quasi iste debitis ullam maxime nulla qui facilis laudantium, sunt rem sit.
                        </p>
                    </div>
                    <div className="items-center justify-end hidden col-span-1 md:flex">
                        <img className="w-full" src="/images/JobChaser.jpg" alt="header image"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
