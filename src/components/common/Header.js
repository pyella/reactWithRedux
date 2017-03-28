/**
 * Created by PY028031 on 3/27/2017.
 */
import React, {PropTypes} from "react";
import {Link, IndexLink} from "react-router";

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName = "active"> Home </IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active"> Courses </Link>
      {" | "}
      <Link to="/about" activeClassName="active"> About </Link>
    </nav>
  );
};

export default Header;
