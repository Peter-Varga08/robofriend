import React, { Fragment } from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <Fragment>
      <input
        className="pa3 ba b--green bg-light-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </Fragment>
  );
};

export default SearchBox;
