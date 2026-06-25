import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages//Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
// import profile from "./assets/Portfolio.jpg";


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