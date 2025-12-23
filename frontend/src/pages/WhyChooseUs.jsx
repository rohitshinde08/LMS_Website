import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const reasons = [
  {
    title: "Engineering Excellence",
    desc: "We build scalable, secure, and high-performance solutions using modern architectures.",
  },
  {
    title: "Modern Technology Stack",
    desc: "React, FastAPI, Cloud, DevOps, and AI — we use technologies that scale with your business.",
  },
  {
    title: "Client-First Approach",
    desc: "We work as your technology partner, not just a service provider.",
  },
  {
    title: "Agile & Transparent Process",
    desc: "Clear communication, fast iterations, and complete visibility throughout development.",
  },
  {
    title: "Security & Reliability",
    desc: "Best practices in authentication, data protection, and infrastructure security.",
  },
  {
    title: "Long-Term Support",
    desc: "From idea to deployment and beyond — we support your growth journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden min-h-screen">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover
                   brightness-130 contrast-125 saturate-125"
      >
        <source src="\public\video\whyus_bg.mp4" type="video/mp4" />
      </video>

      {/* 🔲 VERY LIGHT Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 text-gray-200 py-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Choose{" "}
              <span className="text-blue-500">LM Software Solutions</span>
            </h2>
            <p className="mt-4 text-gray-200 max-w-3xl mx-auto">
              We combine engineering expertise, modern technology, and a
              business-driven mindset to deliver solutions that truly make an
              impact.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-white/5
                  backdrop-blur-3xl
                  rounded-2xl p-8
                  border border-white/20
                  transition-all duration-300
                  hover:bg-white/10
                  hover:border-cyan-400/40
                "
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-100 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Ready to build something impactful?
            </h3>

            <Link
              to="/about"
              className="inline-block px-8 py-4 rounded-full
                         bg-blue-600 hover:bg-blue-700
                         text-white font-medium transition-all
                         shadow-lg shadow-blue-600/30"
            >
              Let’s Work Together
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
