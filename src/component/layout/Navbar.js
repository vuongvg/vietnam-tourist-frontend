import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle, Logout, ManageAccounts } from "@mui/icons-material";
import { getToken } from "../../utils";

function Navbar() {
   const { pathname } = useLocation();
   const urlPath = pathname.split("/");
   const [backGroundColor, setBackGroundColor] = useState("");
   const [currentUser, setCurrentUser] = useState(null);
   const [scrollY, setScrollY] = useState();

   function setBackground() {
      if (urlPath[1] && (urlPath[1] === "detail" || urlPath[1] === "search")) {
         setBackGroundColor("#222831");
      } else {
         setBackGroundColor("transparent");
      }
   }

   function logit() {
      if (window.pageYOffset > 100) {
         setBackGroundColor("#222831");
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
      if (getToken()) {
         setCurrentUser(true);
      } else {
         setCurrentUser(null);
      }
   }, [currentUser]);

   const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("userRole");
   };
   const userRole = localStorage.getItem("userRole");

   return (
      <>
         <div className="d-none d-sm-block position-fixed vw-100 z-1" style={{ backgroundColor: `${backGroundColor}`, transition: "1s" }}>
            <div className="container d-flex align-items-center justify-content-between py-4">
               <div className="text-white">
                  <Link to="/">
                     <h2 className="text-white">VNTOUR</h2>
                  </Link>
               </div>
               <div className="d-flex align-items-center justify-content-end gap-3">
                  {userRole === "admin" && (
                     <NavLink className="menu-item" to="/admin">
                        <div className="d-flex -align-items-center">
                           <ManageAccounts />
                           <div className="ms-1">Admin</div>
                        </div>
                     </NavLink>
                  )}
                  <NavLink className="menu-item" id="home" to="/">
                     Home
                  </NavLink>
                  <NavLink className="menu-item" to="/hotel">
                     Hotel
                  </NavLink>
                  <NavLink className="menu-item" to="/restaurant">
                     Restaurant
                  </NavLink>
                  <NavLink className="menu-item" to="/tour">
                     Tour
                  </NavLink>
                  <NavLink className="menu-item" to="/blog">
                     Blog
                  </NavLink>
                  <NavLink className="menu-item" to="/about">
                     About
                  </NavLink>
                  <NavLink className="menu-item" to="/contact">
                     Contact
                  </NavLink>
                  <NavLink className="menu-item" to="/login">
                     {currentUser ? <Logout onClick={handleLogout} /> : <AccountCircle />}
                  </NavLink>
               </div>
            </div>
         </div>
         <div className="d-block d-sm-none position-fixed vw-100 z-1" style={{ backgroundColor: "#222831", transition: "1s" }}>
            <div className="text-white d-flex justify-content-between py-3 px-4">
               <div>
                  <Link to="/">
                     <h3 className="text-white mb-0">VNTOUR</h3>
                  </Link>
               </div>
               <MenuIcon onClick={handleShowHideMobileMenu}/>
            </div>
            <div hidden={!showHideMenuMobile} className="text-center">
               <div className="py-2">
                  {userRole === "admin" && (
                     <NavLink className="menu-item" to="/admin">
                        <div className="d-inline-flex align-items-center">
                           <ManageAccounts />
                           <div className="ms-1">Admin</div>
                        </div>
                     </NavLink>
                  )}
               </div>
               <div className="py-2">
                  <NavLink className="menu-item" id="home" to="/">
                     Home
                  </NavLink>
               </div>
               <div className="py-2">
                  <NavLink className="menu-item" to="/hotel">
                     Hotel
                  </NavLink>
               </div>
               <div className="py-2">
                  <NavLink className="menu-item" to="/restaurant">
                     Restaurant
                  </NavLink>
               </div>
               <div className="py-2">
                  <NavLink className="menu-item" to="/tour">
                     Tour
                  </NavLink>
               </div>
               <div className="py-2">
                  <NavLink className="menu-item" to="/blog">
                     Blog
                  </NavLink>
               </div>
               <div className="py-2">
                  <NavLink className="menu-item" to="/about">
                     About
                  </NavLink>
               </div>
               <div className="py-2">
                  <NavLink className="menu-item" to="/contact">
                     Contact
                  </NavLink>
               </div>
               <div className="py-2">
                  <NavLink className="menu-item" to="/login">
                     {currentUser ? <Logout onClick={handleLogout} /> : <AccountCircle />}
                  </NavLink>
               </div>
            </div>
         </div>
      </>
   );
}

export default Navbar;
