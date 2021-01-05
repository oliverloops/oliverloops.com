import { MdSearch } from "react-icons/md";

const Search = (props) => {
  return (
    <div className="search-container">
      {/* <input
        type="text"
        value={props.inputValue}
        onChange={props.cardFilter}
        placeholder="Buscar"
      /> */}
      <input type="text" placeholder="Search" />
      <MdSearch className="search" size={30} />
    </div>
  );
};

export default Search;
