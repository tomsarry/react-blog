import React, { Component } from "react";

import { Link, withRouter } from "react-router-dom";

function Nav() {
  // add class instead
  const style = {
    color: "white",
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={style} to="/">
          <li>Home</li>
        </Link>
        <Link style={style} to="/posts">
          <li>Posts</li>
        </Link>
        <Link style={style} to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
