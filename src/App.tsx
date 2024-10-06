import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/About";
import Aplication from "./components/pages/Aplication";
import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";

function App() {
  return (
    <Router>
      <>
        <div className='min-h-full bg-slate-200'>
          <Header />
          <Routes>
            <Route path='/recicle' element={<Home />} />
            <Route path='/recicle/dinamica' element={<Aplication />} />
            <Route path='/recicle/sobre' element={<About />} />
          </Routes>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
