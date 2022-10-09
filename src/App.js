import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Tour from "./pages/Tour";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Restaurant from "./pages/Restaurants";
import DetailBlog from "./pages/DetailBlog";
import Admin from "./pages/Admin";
import Detail from "./pages/Detail";

function App() {

   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   return (
      <div className="App">
         {
            (pathname !== "/login" && pathname !== "/register")
               &&
                  <Navbar />
         }
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/restaurant" element={<Restaurant />}/>
            <Route path="/detail">
               <Route path="blog/:id" element={<DetailBlog />}/>
               <Route path="hotel/:id" element={<Detail />}/>
            </Route>
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
