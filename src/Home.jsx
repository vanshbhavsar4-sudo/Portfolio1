import { motion } from "framer-motion";
import profile from "./assets/portfolio.jpg";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#020617] flex flex-col-reverse md:flex-row items-center justify-between px-10 py-20 overflow-hidden">

      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2"
      >
        <span className="border border-cyan-400 text-cyan-400 px-5 py-2 rounded-full">
          Front-End Developer
        </span>

        <h1 className="text-6xl md:text-7xl font-bold mt-8 text-white">
          Hi, I'm
          <br />
          <span className="text-cyan-400">Vansh Bhavsar</span>
        </h1>

        <p className="text-gray-400 text-xl mt-6 max-w-lg">
          I build beautiful and responsive websites using React and Tailwind CSS.
        </p>

        <button className="mt-10 bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 duration-300">
          Download CV
        </button>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex justify-center items-center relative"
      >
        <div className="absolute w-[450px] h-[450px] rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>

        <div className="relative p-2 rounded-full bg-cyan-400">
          <img
            src={profile}
            alt="Vansh Bhavsar"
            className="w-[420px] h-[420px] rounded-full object-cover bg-white"
          />
        </div>
      </motion.div>

    </section>
  );
}