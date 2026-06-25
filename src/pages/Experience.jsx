import { motion } from "framer-motion";

export default function Experience() {
  const experienceData = [
    {
      title: "React Developer",
      desc: "Built responsive and interactive websites using React and Tailwind CSS.",
    },
    {
      title: "Portfolio Projects",
      desc: "Designed and developed modern portfolio websites with animations.",
    },
    {
      title: "Hotel & Resort Website",
      desc: "Created a Royal Stay Resort website with modern UI and responsive design.",
    },
    {
      title: "Frontend Development",
      desc: "Worked with HTML, CSS, JavaScript, Tailwind CSS, and Framer Motion.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-slate-950 text-white py-20 px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center mb-16"
      >
        My <span className="text-cyan-400">Experience</span>
      </motion.h1>

      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="bg-cyan-500 text-black px-8 py-3 rounded-full text-2xl font-bold shadow-lg">
            2026
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 border border-cyan-400 p-8 rounded-3xl shadow-lg shadow-cyan-500/10"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                {item.title}
              </h2>

              <p className="text-gray-400 leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}