import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-slate-900 sticky top-0 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-cyan-400">
          Portfolio
        </h1>

        <ul className="flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </ul>

      </div>
    </motion.nav>
  );
}