import "./App.css";
import "bulma/css/bulma.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import ExperienceDetails from "./pages/ExperienceDetails";

function App() {
  return (
    <>
      <Router
        basename={
          import.meta.env.BASE_URL.replace(/\/$/, "") || "/"
        }
      >
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience/:jobId" element={<ExperienceDetails />} />
          <Route path="/" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
