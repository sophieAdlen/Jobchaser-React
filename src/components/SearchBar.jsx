import App from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ onSearch }) {

  
  //funktion för att hantera sökningen i sökrutan
  const handleSearch = (e) => {
    e.preventDefault(); //förhindrar standarbeteende för formulärinsänningen
    const term = e.target.search.value; //hämtar värdet från sökfältet
    onSearch(term); // Anropa onSearch-funktionen som skickades som prop med söktermen
  };

  return (
    <form
      onSubmit={handleSearch}
      className="pt-2 relative text-gray-600 flex justify-center items-center mx-10 mb-10"
    >
      <input
        className=" border bg-white h-12 max-w-md flex-grow px-5 pr-10 rounded-xl text-l "
        type="search"
        name="search"
        placeholder="Search"
      />
      <button
        type="submit"
        className=" searchBtn bg-mainBlue py-2 px-5 rounded-xl "
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
}

export default SearchBar;
