import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import profile from "./assets/portfolio.jpg";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-950 text-white min-h-screen">
        <Navbar />

        <main className="max-w-6xl mx-auto py-10 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;