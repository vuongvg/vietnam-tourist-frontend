import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
   return (
      <div >
         <NavLink to="/">Home</NavLink>
         <NavLink to="/blog">Blog</NavLink>
         <NavLink to="/hotel">hotel</NavLink>
         <NavLink to="/tour">tour</NavLink>
         <NavLink to="/contact">contact</NavLink>
         <NavLink to="/about">about</NavLink>
      </div>
   );
}

export default Navbar;
