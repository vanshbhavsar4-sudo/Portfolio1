import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Royal Stay Resort",
      description:
        "A modern and responsive hotel & resort website built using React and Tailwind CSS.",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website with smooth animations and a modern UI.",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 text-white py-20 px-6"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-16"
      >
        My <span className="text-cyan-400">Projects</span>
      </motion.h1>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              boxShadow: "0 0 30px rgba(34,211,238,0.3)",
            }}
            className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-8"
          >
            {/* Project Number */}
            <h1 className="text-7xl font-bold text-slate-800 mb-4">
              0{index + 1}
            </h1>

            {/* Title */}
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-gray-400 leading-7 mb-8">
              {project.description}
            </p>

            {/* Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.demo}
              className="inline-flex items-center gap-3 bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600 duration-300"
            >
              <FaExternalLinkAlt />
              View Project
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}