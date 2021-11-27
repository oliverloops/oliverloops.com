import { MdSearch } from "react-icons/md";

const Search = ({ setResult }) => {
  function getInput(e) {
    setResult(e.target.value.toLowerCase());
  }

  return (
    <div className="search-container mb-4 border border-gray-300 dark:border-black bg-white dark:bg-gray-700">
      <input
        className="bg-white dark:bg-gray-700 dark:text-white"
        type="text"
        placeholder="Search"
        onChange={getInput}
      />
      <MdSearch className="search" size={30} />
    </div>
  );
};

export default Search;
