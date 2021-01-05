import { MdSearch } from "react-icons/md";

const Search = (props) => {
  return (
    <div className="search-container mb-4 border border-gray-300 dark:border-black bg-white dark:bg-gray-700">
      {/* <input
        type="text"
        value={props.inputValue}
        onChange={props.cardFilter}
        placeholder="Buscar"
      /> */}
      <input
        className="bg-white dark:bg-gray-700 dark:text-white"
        type="text"
        placeholder="Search"
      />
      <MdSearch className="search" size={30} />
    </div>
  );
};

export default Search;
