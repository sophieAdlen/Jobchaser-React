import Navigation from "../Navbar"
import Footer from "../footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone, faMapLocation, faPaperPlane} from '@fortawesome/free-solid-svg-icons'

import React from 'react';

function Contact() {
  return (
    <>
    <Navigation />
    <div className="contact-main flex items-center justify-center py-10 ">
      <div className="max-w-6xl shadow-2xl  rounded-lg">
        <div className="grid md:grid-cols-2 items-center gap-16 sm:p-10 p-4 ">
          <div>
            <h1 className="text-4xl font-extrabold">Get in Touch</h1>
            <p className="text-sm mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ducimus voluptas accusantium tenetur? Vitae, corporis.</p>
            <ul className="mt-12 space-y-8">
              <li className="flex items-center">
               <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:info@example.com" className=" text-sm ml-3 ">
                  <strong>info@example.com</strong>
                </a>
              </li>
              <li className="flex items-center">
              <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+158996888" className=" text-sm ml-3 ">
                  <strong>+158 996 888</strong>
                </a>
              </li>
              <li className="flex items-center">
              <FontAwesomeIcon icon={faMapLocation } />
                <a href="" className=" text-sm ml-3 ">
                  <strong>123 Street 256 House</strong>
                </a>
              </li>
            </ul>
            <ul className="flex mt-12 space-x-4">
              <li className="bg-extraBlue hover:bg-[#89c0f4;] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" role="img" aria-labelledby="facebook-icon">
                <path fill="#ffffff" d="M18.896 20.12h1.758v-1.708c0-.753.02-1.915.566-2.635.576-.762 1.368-1.28 2.73-1.28 2.218 0 3.15.316 3.15.316l-.438 2.605s-.73-.212-1.417-.212c-.684 0-1.296.245-1.296.93v1.985h2.803l-.194 2.547h-2.61v8.84h-3.297v-8.84h-1.758V20.12z"/>
              </svg>
              </li>
              <li className="bg-extraBlue  hover:bg-[#89c0f4;] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"  role="img" aria-labelledby="linkedin-icon">
                <path fill="#ffffff" d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z"/>
                </svg>
              </li>
              <li className="bg-extraBlue hover:bg-[#89c0f4;] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" role="img" aria-labelledby="instagram-icon">
                <path fill="#ffffff" d="M29.76 29.03v-7.373h-1.537c.152.48.23.975.23 1.49 0 .958-.243 1.838-.73 2.647-.485.807-1.146 1.447-1.98 1.918-.834.47-1.744.705-2.73.705-1.495 0-2.773-.514-3.835-1.543-1.062-1.027-1.593-2.27-1.593-3.726 0-.517.076-1.013.228-1.49H16.21v7.373c0 .2.065.37.2.5.13.14.296.2.494.2H29.07c.188 0 .352-.06.488-.2s.202-.3.202-.49zm-3.233-6.064c0-.94-.343-1.743-1.03-2.406-.686-.664-1.515-.996-2.486-.996-.96 0-1.78.332-2.47.996-.68.663-1.03 1.466-1.03 2.406 0 .942.35 1.743 1.03 2.407s1.51.996 2.48.996c.975 0 1.8-.34 2.49-1s1.03-1.47 1.03-2.41zm3.233-4.097v-1.88c0-.22-.076-.4-.23-.56-.15-.158-.336-.235-.556-.235h-1.98c-.22 0-.406.08-.558.233-.15.155-.228.34-.228.552v1.876c0 .22.076.404.228.556s.337.23.558.23h1.98c.22 0 .406-.078.557-.23.16-.15.23-.338.23-.558zm1.98-2.37v12.99c0 .61-.22 1.14-.66 1.58-.44.44-.967.66-1.582.66H16.502c-.614 0-1.142-.22-1.582-.66-.44-.44-.66-.97-.66-1.586V16.5c0-.614.22-1.142.66-1.582.44-.44.967-.66 1.582-.66h12.996c.615 0 1.14.22 1.582.66.44.44.66.967.66 1.58z"/>
              </svg>
              </li>
            </ul>
          </div>
          <div>
            <form action="" className="w-full">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label htmlFor="name" className="px-1 text-sm font-semibold  ">Full Name</label>
                  <input type="text" id="name" placeholder="Your Name" className="appearance-none block w-full mb-3 leading-tight text-md  px-3 py-2 rounded-lg shadow-md focus:outline-none" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label htmlFor="email" className="px-1 text-sm font-semibold  ">Email Address</label>
                  <input type="email" id="email" placeholder="Your Email" className="appearance-none block w-full mb-3 leading-tight text-md  px-3 py-2 rounded-lg shadow-md focus:outline-none" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label htmlFor="message" className="px-1 text-sm font-semibold  ">Message</label>
                  <textarea id="message" rows="6" placeholder="Your Message" className="no-resize appearance-none w-full mb-3 leading-tight text-md  px-3 py-2 rounded-lg shadow-md focus:outline-none"></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <button type="button" className="w-full bg-extraBlue hover:bg-[#89c0f4;] text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline ">Send Message <FontAwesomeIcon icon={faPaperPlane} /></button>
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
