import React from "react";
import propTypes from "prop-types";

const Title = ({ title }) => {
  return <h2>{title}</h2>;
};

export default Title;
Title.propTypes = {
  title: propTypes.string,
};
