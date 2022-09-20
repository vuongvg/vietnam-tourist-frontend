import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
   const [backGroundColor, setBackGroundColor] = useState('');
   const [scrollY, setScrollY] = useState();

   function logit() {
      if (window.pageYOffset > 100) {
         setBackGroundColor('#222831');
      } else {
         setBackGroundColor('transparent');
      }
      setScrollY(window.pageYOffset);
   }

   useEffect(() => {
      function watchScroll() {
        window.addEventListener("scroll", logit);
      }
      watchScroll();
      return () => {
        window.removeEventListener("scroll", logit);
      };
   }, []);

   return (
      <>
         <div className="d-none d-sm-block position-fixed vw-100 z-1" style={{backgroundColor:`${backGroundColor}`, transition:'1s'}}>
            <div className="container d-flex align-items-center justify-content-between py-4">
               <div className="text-white">
                  <h2>VNTOUR</h2>
               </div>
               <div className="d-flex align-items-center justify-content-end gap-3">
                  <NavLink className="menu-item" to="/">Home</NavLink>
                  <NavLink className="menu-item" to="/about">About</NavLink>
                  <NavLink className="menu-item" to="/hotel">Hotel</NavLink>
                  <NavLink className="menu-item" to="/restaurant">Restaurant</NavLink>
                  <NavLink className="menu-item" to="/tour">Tour</NavLink>
                  <NavLink className="menu-item" to="/blog">Blog</NavLink>
                  <NavLink className="menu-item" to="/contact">Contact</NavLink>
               </div>
            </div>
         </div>
         <div className="d-block d-sm-none position-fixed vw-100 z-1" style={{backgroundColor:'#222831', transition:'1s'}}>
            <div className="text-white d-flex justify-content-between py-3 px-4">
               <div>dirEngine</div>
               <MenuIcon />
            </div>
         </div>
      </>
      
   );
}

export default Navbar;
