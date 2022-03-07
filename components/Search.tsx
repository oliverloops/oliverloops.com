import { MdSearch } from "react-icons/md";

const Search = ({
  setResult,
  placeholder,
}: {
  setResult: any;
  placeholder: string;
}) => {
  function getInput(e: any) {
    setResult(e.target.value.toLowerCase());
  }

  return (
    <div className="search-container flex align-center w-full md:w-10/12 h-11 mb-4 border-2 border-gray-400 rounded-lg bg-white dark:bg-gray-700">
      <input
        className="bg-white dark:bg-gray-700 dark:text-white"
        type="text"
        placeholder={placeholder}
        onChange={getInput}
      />
      <MdSearch
        className="text-gray-300 dark:text-gray-400 mt-1 mr-2.5"
        size={32}
      />
    </div>
  );
};

export default Search;
