import React from "react";
import { NavLink } from "react-router-dom";
const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">New project</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink ligthen-1">
          NR
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
