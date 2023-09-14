import Navbar from "./components/Navbar/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/ContactUs/Contact";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="*" element={<Home/>} />

      </Routes>
      
      
      </BrowserRouter>
   
    </div>
  );
}

export default App;
