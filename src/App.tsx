import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/About";
import Aplication from "./components/pages/Aplication";
import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";

function App() {
  return (
    <HashRouter basename='/'>
      <>
        <div className='min-h-full bg-slate-200'>
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dinamica' element={<Aplication />} />
            <Route path='/sobre' element={<About />} />
          </Routes>

          <Footer />
        </div>
      </>
    </HashRouter>
  );
}

export default App;
