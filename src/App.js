import { 
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";

//-- importing view --//
import Home from './views/home'
import Generate from "./views/Generate";



//-- importing Navbar --//
import Navbar from "./components/Navbar";

//-- importing Navbar --//
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Generate" element={<Generate />} />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
