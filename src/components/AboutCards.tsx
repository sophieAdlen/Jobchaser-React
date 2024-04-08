import React from "react";


function Card({ src, alt, label }) {
    return (
      <section className="card  relative shadow-md rounded-3xl mx-8 my-3  w-[200px]  cursor-pointer">
        <div className="overflow-x-hidden rounded-2xl relative px-6 p-4">
          <img
            className="h-40 rounded-2xl w-[100px] h-[120px] mx-auto"
            src={src}
            alt={alt}
          />
        </div>
        <div className="mt-4 pl-2 mb-2 flex justify-center ">
          <div>
            <p className="text-lg font-semibold">
              {label}
            </p>
          </div>
        </div>
      </section>
    );
  }

  export default Card;