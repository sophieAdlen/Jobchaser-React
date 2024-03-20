import Navigation from "./Navbar"
import Footer from "./footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function RegisterForm() {
    return (
        <>
       <Navigation />
       <section className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
            <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-2xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
                <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                        <img className="w-full" src="/images/signin.png" alt="header image"/>
                    </div>
                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl">REGISTER</h1>
                            <p>Enter your information to register</p>
                        </div>
                        <form>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
                                <FontAwesomeIcon icon={faUser} />
                                    <label htmlFor="firstName" className="text-sm font-semibold px-1">First name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input id="firstName" type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg  outline-none focus:border-indigo-500" placeholder="First name" />
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                <FontAwesomeIcon icon={faUser} />
                                    <label htmlFor="lastName" className="text-sm font-semibold px-1">Last name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input id="lastName" type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg  outline-none focus:border-indigo-500" placeholder="Last name" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                <FontAwesomeIcon icon={faEnvelope} />
                                    <label htmlFor="email" className="text-sm font-semibold px-1">Email</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input id="email" type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg shadow-2xl  outline-none focus:border-indigo-500" placeholder="Email" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                <FontAwesomeIcon icon={faLock} />
                                    <label htmlFor="password" className="text-sm font-semibold px-1">Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input id="password" type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg shadow-2xl  outline-none focus:border-indigo-500" placeholder="Password" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                              
                                    <label htmlFor="password" className="text-sm font-semibold px-1">Confirm Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input id="passwordSeconde" type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg  shadow-2xl outline-none focus:border-indigo-500" placeholder="Confirm Password" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <button type="submit" className="block w-full max-w-xs mx-auto bg-extraBlue hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
 
        <Footer />
         </>
    );
}

export default RegisterForm;