import { motion } from "framer-motion";

/* =======================
   DATA
   ======================= */
const whyWorkWithUs = [
  {
    title: "Hands-On Product Development",
    description: [
      "Work on live, real-world projects used by actual clients.",
      "Be involved in the complete development lifecycle.",
      "Gain practical exposure beyond tutorials and mock tasks.",
    ],
  },
  {
    title: "Close-Knit Team & Direct Mentorship",
    description: [
      "Collaborate within a small and focused development team.",
      "Learn directly from experienced developers and leads.",
      "Receive continuous guidance and constructive feedback.",
    ],
  },
  {
    title: "Modern Tech Stack & Best Practices",
    description: [
      "Work with modern frameworks and scalable architectures.",
      "Follow industry-standard coding and review practices.",
      "Build clean, future-ready software solutions.",
    ],
  },
  {
    title: "Fast Growth Through Real Responsibility",
    description: [
      "Take ownership of meaningful features early.",
      "Your contributions directly influence success.",
      "Growth is driven by skill and initiative.",
    ],
  },
  {
    title: "Transparent & Learning-Driven Culture",
    description: [
      "Open communication and clarity at every level.",
      "Mistakes are treated as learning opportunities.",
      "Continuous improvement is encouraged.",
    ],
  },
  {
    title: "Internship to Full-Time Career Path",
    description: [
      "Clear conversion path to full-time roles.",
      "Interns are treated as real contributors.",
      "High performers grow long-term with us.",
    ],
  },
];

/* =======================
   ANIMATION VARIANTS
   ======================= */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

/* =======================
   COMPONENT
   ======================= */
const Careers = () => {
  return (
    <div className="bg-gradient-to-b from-[#0B1220] via-[#0E1628] to-[#0B1220] text-white">

      {/* HERO */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-28 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Build Your Career With{" "}
          <span className="text-blue-500 relative">
            LM Software
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-blue-500/60" />
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Work on scalable digital solutions, grow your skills, and be part of a
          team that values ownership and innovation.
        </p>
      </motion.section>

      {/* WHY WORK WITH US */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center mb-14">
          Why Work With Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {whyWorkWithUs.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="
                bg-white
                text-black
                rounded-xl
                p-6
                border border-black/10
                transition-all duration-300
                hover:border-blue-700
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
                relative overflow-hidden
              "
            >
              {/* Accent bar */}
              <span className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 to-blue-400" />

              <h3 className="text-lg font-semibold mb-4">
                {item.title}
              </h3>

              <ul className="space-y-2">
                {item.description.map((line, i) => (
                  <li
                    key={i}
                    className="text-sm italic leading-relaxed text-gray-800"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* HIRING PROCESS */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center mb-14">
          Our Hiring Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            "Requirement Analysis",
            "Technical Discussion",
            "Practical Task",
            "Final Discussion",
          ].map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.08 }}
              className="
                bg-white/5
                border border-white/10
                rounded-xl
                p-6
                text-center
                transition-all duration-300
                hover:border-blue-700
                hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]
              "
            >
              <div className="text-blue-600 text-2xl font-bold mb-3">
                {index + 1}
              </div>
              <p className="text-gray-300">{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-28 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold">
          Ready to Build Something Powerful?
        </h2>
        <p className="mt-4 text-gray-400">
          Send your resume and start your journey with us.
        </p>

        <motion.a
          href="mailto:careers@lmsoftware.com"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="
            inline-block mt-10 px-10 py-4
            bg-blue-600 rounded-xl
            text-white font-medium
            shadow-lg shadow-blue-600/30
            hover:bg-blue-700
            transition
          "
        >
          Apply Now
        </motion.a>
      </motion.section>

    </div>
  );
};

export default Careers;
