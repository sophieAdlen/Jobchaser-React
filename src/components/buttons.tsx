import React from "react";
import { useDispatch } from 'react-redux';
import { setFilterTerm } from '../store/slices/jobSlice';

function Buttons() {
    const dispatch = useDispatch();

    const handleFilterClick = (term: string) => {
        dispatch(setFilterTerm(term)); 
    };

    return (
        <section className="flex space-x-2 space-y-2 flex-wrap justify-center items-baseline ">
            <button className="rounded-lg px-4 py-2 bg-extraBlue hover:bg-[#89c0f4;]" onClick={() => handleFilterClick("Javascript")}>Javascript</button>
            <button className="rounded-lg px-4 py-2 bg-extraBlue hover:bg-[#89c0f4;]" onClick={() => handleFilterClick("Python")}>Python</button>
            <button className="rounded-lg px-4 py-2 bg-extraBlue hover:bg-[#89c0f4;]" onClick={() => handleFilterClick("Django")}>Django</button>
            <button className="rounded-lg px-4 py-2 bg-extraBlue hover:bg-[#89c0f4;]" onClick={() => handleFilterClick("Ruby")}>Ruby</button>
            <button className="rounded-lg px-4 py-2 bg-extraBlue hover:bg-[#89c0f4;]" onClick={() => handleFilterClick("Vue")}>Vue</button>
            <button className="rounded-lg px-4 py-2 bg-extraBlue hover:bg-[#89c0f4;]" onClick={() => handleFilterClick("Senior")}>Senior</button>
            <button className="rounded-lg px-4 py-2 bg-extraBlue hover:bg-[#89c0f4;]" onClick={() => handleFilterClick("Junior")}>Junior</button>
        </section>
    )
}

export default Buttons;
