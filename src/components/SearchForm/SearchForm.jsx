import React from "react";
import propTypes from "prop-types";

const SearchForm = ({ handleChange, handleSubmit, value }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="type here"
      />
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  value: propTypes.string,
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
};
