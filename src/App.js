import { 
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";

//-- importing view --//
import { Home } from './views/home'



//-- importing Navbar --//
import Navbar from "./components/Navbar";

//-- importing Navbar --//
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="expenses" element={<Expenses />} /> */}
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
