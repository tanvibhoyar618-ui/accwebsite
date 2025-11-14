import { Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Gallery from "./Component/Gallery/Gallery";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Task from "./Component/Home/Task";
import VGallery from "./Component/VGallery/VGallery";


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/vgallery" element={<VGallery/>}/>
          <Route path="/contact" element={<Contact/>}/>
        
        </Routes>
        <Footer/>
         {/* <Home/> */}
          {/* <About/>  */}
          {/* <Gallery/> */}
          {/* <VGallery/> */}
          {/* <Contact/> */}
     

      {/* <Task/> */}
  
    </div>
  );
}

export default App;
