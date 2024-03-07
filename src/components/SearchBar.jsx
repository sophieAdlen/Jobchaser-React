import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import App from "../App";

function SearchBar() {
  return (
    <form className="pt-2 relative text-gray-600 flex justify-center items-center mx-10 ">
      <input
        className="border-2 border-gray-300 bg-white h-10 max-w-md flex-grow px-5 pr-10 rounded-l-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button
        type="submit"
        className="bg-cyan-400 hover:bg-sky-300 py-2 px-5 rounded-r-lg"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}

export default SearchBar;
