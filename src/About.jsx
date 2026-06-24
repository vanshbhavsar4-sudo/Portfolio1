import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-5xl font-bold mb-8">
          About <span className="text-cyan-400">Me</span>
        </h1>

        <p className="text-gray-300 text-lg leading-9">
          Hello! I'm <span className="text-cyan-400 font-semibold">Vansh Bhavsar</span>,
          a passionate Front-End Developer with a strong interest in creating
          modern, responsive, and user-friendly web applications. I specialize
          in React.js, Tailwind CSS, and JavaScript, and I enjoy transforming
          ideas into beautiful and functional websites.
        </p>

        <p className="text-gray-400 text-lg leading-9 mt-6">
          I am continuously learning new technologies and improving my skills
          through real-world projects. My goal is to build high-quality web
          experiences that are visually appealing, responsive, and easy to use.
          I am always excited to take on new challenges and opportunities to
          grow as a developer.
        </p>
      </motion.div>
    </section>
  );
}