import { 
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";

//-- importing views --//
import Home from './views/home'
import Generate from "./views/Generate";
import Recover from "./views/Recover";
import About from "./views/About";
import Contact from "./views/Contact";


import ModalProvider from "./context/ModalContext";


//-- importing Navbar --//
import Navbar from "./components/Navbar";

//-- importing Navbar --//
import Footer from "./components/Footer";

// import { useLocation } from 'react-router-dom'

import LangProvider from "./context/langContext";

function App() {
  // const location = useLocation()
  // //console.log(location.pathname)
  return (
    <BrowserRouter>
    <LangProvider>
      <ModalProvider>
        <div>
          {/* <Navbar/> */}
            <Routes>
              <Route exact path="/" element={ <Home/>}/>
              <Route path="/generate" element={<Generate />} />
              <Route path="/recover" element={<Recover />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            {/* <Footer/> */}
          </div>
        </ModalProvider>
      </LangProvider>
    </BrowserRouter>
  );
}

export default App;
