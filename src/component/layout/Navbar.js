import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle, Logout } from '@mui/icons-material';
import { getToken } from "../../utils";

function Navbar() {
   const { pathname } = useLocation();
   const urlPath = pathname.split("/");
   const [backGroundColor, setBackGroundColor] = useState('');
   const [currentUser, setCurrentUser] = useState(null);
   const [scrollY, setScrollY] = useState();

   function setBackground() {
      if (urlPath[1] && urlPath[1] === "detail") {
         setBackGroundColor('#222831');
      } else {
         setBackGroundColor('transparent');
      }
   }

   function logit() {
      if (window.pageYOffset > 100) {
         setBackGroundColor('#222831');
      } else {
         setBackground();
      }
      setScrollY(window.pageYOffset);
   }

   useEffect(() => {
      setBackground();
      
      function watchScroll() {
        window.addEventListener("scroll", logit);
      }
      watchScroll();
      return () => {
        window.removeEventListener("scroll", logit);
      };
   }, [pathname]);

   useEffect(() => {
      if (getToken) {
         setCurrentUser(true);
      } else {
         setCurrentUser(null);
      }
   }, [currentUser]);

   const handleLogout = () => {
      localStorage.removeItem('token');
   }

   return (
      <>
         <div className="d-none d-sm-block position-fixed vw-100 z-1" style={{backgroundColor:`${backGroundColor}`, transition:'1s'}}>
            <div className="container d-flex align-items-center justify-content-between py-4">
               <div className="text-white">
                  <h2>VNTOUR</h2>
               </div>
               <div className="d-flex align-items-center justify-content-end gap-3">
                  <NavLink className="menu-item" to="/admin">Admin</NavLink>
                  <NavLink className="menu-item" to="/">Home</NavLink>
                  <NavLink className="menu-item" to="/about">About</NavLink>
                  <NavLink className="menu-item" to="/hotel">Hotel</NavLink>
                  <NavLink className="menu-item" to="/restaurant">Restaurant</NavLink>
                  <NavLink className="menu-item" to="/tour">Tour</NavLink>
                  <NavLink className="menu-item" to="/blog">Blog</NavLink>
                  <NavLink className="menu-item" to="/contact">Contact</NavLink>
                  <NavLink className="menu-item" to="/login">
                     {
                        currentUser
                           ? 
                              <Logout onClick={handleLogout}/>
                           :
                              <AccountCircle/>
                     }
                  </NavLink>
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
