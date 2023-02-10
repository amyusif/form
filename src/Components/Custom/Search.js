import React, { useState } from "react";

const Search = ({searchSubmit}) => {
  const [Search, setSearch] = useState(" ");

  const onSearchInput = (e) => {
    return setSearch(e.target.value);
  };

  const onInputSubmit=(e) => {
        e.preventDefault()
        searchSubmit(Search)
  }

  return (
    <div>
      <form onSubmit={onInputSubmit}>
        <input
          type="text"
          id="search"
          placeholder="Search....."
          onChange={onSearchInput}
        />
      </form>
    </div>
  );
};

export default Search;
