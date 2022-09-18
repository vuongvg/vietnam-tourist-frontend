import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
   const [backGroundColor, setBackGroundColor] = useState('');

   return (
      <div className="position-fixed vw-100 z-1" style={{backgroundColor:`${backGroundColor}`}}>
         <div className="container d-flex align-items-center justify-content-between py-4">
            <div className="text-white">
               <h2>VNTOUR</h2>
            </div>
            <div className="d-flex align-items-center justify-content-end gap-3">
               <NavLink className="menu-item" to="/">Home</NavLink>
               <NavLink className="menu-item" to="/about">About</NavLink>
               <NavLink className="menu-item" to="/hotel">Hotels</NavLink>
               <NavLink className="menu-item" to="/hotel">Restaurant</NavLink>
               <NavLink className="menu-item" to="/tour">Tour</NavLink>
               <NavLink className="menu-item" to="/blog">Blog</NavLink>
               <NavLink className="menu-item" to="/contact">Contact</NavLink>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
