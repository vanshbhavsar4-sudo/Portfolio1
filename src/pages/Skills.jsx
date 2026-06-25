function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "GitHub",
  ];

  return (
    <section id="skills" className="py-20 px-10 bg-slate-900">
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">Skills</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-slate-800 p-8 rounded-xl text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;