import { 
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";

//-- importing views --//
import Home from './views/home'
import Generate from "./views/Generate";
import Recover from "./views/Recover";


import ModalProvider from "./context/ModalContext";


//-- importing Navbar --//
import Navbar from "./components/Navbar";

//-- importing Navbar --//
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <ModalProvider>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/recover" element={<Recover />} />
      </Routes>
      <Footer/>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
