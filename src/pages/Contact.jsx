import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl bg-slate-900 rounded-3xl p-10 border border-cyan-500/20 shadow-xl"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-gray-400 mt-4">
            Feel free to contact me. I am always open to discussing new projects and opportunities.
          </p>
        </motion.div>

        {/* Form */}
        <form className="space-y-6">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
          />

          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            rows="6"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
          />

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgb(34 211 238)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-cyan-500 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-600 duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}