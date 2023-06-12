import { IoSearch } from "react-icons/io5";

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
    <div
      style={{ border: "3.25px solid #000" }} 
      className="transition duration-300 search-container flex align-center w-full md:w-10/12 h-11 mb-4 border-black dark:border-white rounded-xl bg-white dark:bg-gray-700">
      <input
        className="transition duration-300 file:bg-white dark:bg-gray-700 dark:text-white"
        type="text"
        placeholder={placeholder}
        onChange={getInput}
      />
      <IoSearch
        className="transition duration-300 text-gray-300 dark:text-gray-400 mt-1 mr-2.5"
        size={28}
      />
    </div>
  );
};

export default Search;
