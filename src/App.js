import { Routes, Route } from "react-router-dom";
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

function App() {
   return (
      <div className="App">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/tour" element={<Tour />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
