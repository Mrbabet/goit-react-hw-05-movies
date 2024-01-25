import React from "react";
import { Link } from "react-router-dom";

const BackLink = ({ children, to }) => {
  return <Link to={to}>{children}</Link>;
};

export default BackLink;
