import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
  onSearch: (term: string) => void;
}
function SearchBar({ onSearch }: SearchBarProps) {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const inputElement = e.currentTarget.querySelector('input[name="search"]') as HTMLInputElement;
    if (inputElement && inputElement.value) {
      const term = inputElement.value;
      onSearch(term);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="pt-2 relative flex justify-center items-center mx-10 mb-10"
    >
      <input
        className=" border bg-white h-12 max-w-md flex-grow px-5 pr-10 rounded-xl text-l "
        type="search"
        name="search"
        placeholder="Search"
      />
      <button
        type="submit"
        className=" searchBtn  ml-2 h-12 bg-extraBlue hover:bg-[#89c0f4;]  py-2 px-5 rounded-xl "
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
}

export default SearchBar;
