import "./App.css";
import "bulma/css/bulma.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Toolkit from "./pages/Toolkit";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/toolkit" element={<Toolkit />} />
          <Route path="/" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
