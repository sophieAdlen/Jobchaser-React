import React from "react";

import Card from "./AboutCards";
import Navigation from "./Navbar";
import Footer from "./footer";
import { Container } from "postcss";

  function AboutPage() {
    return (
      <>
        <Navigation />
    <section className="py-10 h-lvh">
        <div className="bg-white mt-20 ">
          <div className="max-w-4xl p-6 text-center mx-auto">
            <h2 className="text-3xl font-semibold ">About us </h2>
            <p className="mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aliquam
              veniam suscipit eaque iure, eligendi harum expedita cupiditate
              sequi, culpa autem! Quaerat ex fugit iste suscipit reiciendis,
              accusamus ipsum quae. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ex quidem aspernatur, perspiciatis maxime
              voluptatum dicta, hic accusantium error enim voluptatem sint
              assumenda in labore porro doloremque laudantium? Aliquam, in
              perspiciatis?
            </p>
  
            {/* <div className="my-4">
              <img className="m-auto" src="/images/About.png" alt="about image" />
            </div> */}
          </div>
        </div>
  
        <div className="flex flex-wrap justify-center">
          <Card src="/images/code.png" alt="header image"label="For Developers " />
          <Card src="/images/safe.png" alt="header image" label="Safe Site" />
          <Card src="/images/winner.png" alt="header image" label="Leading Site" />
        </div>
  </section>
        <Footer />
      </>
    );
  }

export default AboutPage;
