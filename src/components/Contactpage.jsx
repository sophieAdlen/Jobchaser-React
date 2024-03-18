import Navigation from "./Navbar"
import Footer from "./footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone, faMapLocation} from '@fortawesome/free-solid-svg-icons'


import React from 'react';

function Contact() {
  return (
    <>
    <Navigation />
    <div className="my-6">
      <div className="max-w-6xl mx-auto bg-[#] rounded-lg">
        <div className="grid md:grid-cols-2 items-center gap-16 sm:p-10 p-4 font-sans">
          <div>
            <h1 className="text-4xl font-extrabold text-white">Get in Touch</h1>
            <p className="text-sm text-gray-400 mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ducimus voluptas accusantium tenetur? Vitae, corporis.</p>
            <ul className="mt-12 space-y-8">
              <li className="flex items-center">
               <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:info@example.com" className="text-white text-sm ml-3">
                  <strong>info@example.com</strong>
                </a>
              </li>
              <li className="flex items-center">
              <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+158996888" className="text-white text-sm ml-3">
                  <strong>+158 996 888</strong>
                </a>
              </li>
              <li className="flex items-center">
              <FontAwesomeIcon icon={faMapLocation } />
                <a href="" className="text-white text-sm ml-3">
                  <strong>123 Street 256 House</strong>
                </a>
              </li>
            </ul>
            <ul className="flex mt-12 space-x-4">
              <li className="bg-extraBlue hover:bg-[#89c0f4;] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="">  
               <p>fb</p>
                </a>
              </li>
              <li className="bg-extraBlue  hover:bg-[#89c0f4;] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="">
                <p>link</p>
                </a>
              </li>
              <li className="bg-extraBlue hover:bg-[#89c0f4;] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="">
                <p>insta</p>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <form action="" className="w-full">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label htmlFor="name" className="block uppercase tracking-wide text-white text-xs font-bold mb-2">Full Name</label>
                  <input type="text" id="name" placeholder="Your Name" className="appearance-none block w-full bg-mainBlue text-white border border-mainBlue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label htmlFor="email" className="block uppercase tracking-wide text-white text-xs font-bold mb-2">Email Address</label>
                  <input type="email" id="email" placeholder="Your Email" className="appearance-none block w-full bg-mainBlue text-white border border-mainBlue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label htmlFor="message" className="block uppercase tracking-wide text-white text-xs font-bold mb-2">Message</label>
                  <textarea id="message" rows="6" placeholder="Your Message" className="no-resize appearance-none block w-full bg-mainBlue text-white border border-mainBlue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <button type="button" className="w-full bg-extraBlue hover:bg-[#89c0f4;] text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Contact;
