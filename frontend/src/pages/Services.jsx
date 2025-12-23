import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

/* ================= DATA ================= */

const services = [
  {
    title: "Custom Software Development",
    desc: "Scalable and secure software solutions tailored to your business needs.",
  },
  {
    title: "Cloud Integration & Migration",
    desc: "Seamless cloud migration, optimization, and DevOps best practices.",
  },
  {
    title: "Mobile App Development",
    desc: "High-performance Android & iOS applications built for scale.",
  },
  {
    title: "Enterprise Web Applications",
    desc: "Robust enterprise systems with modern architectures.",
  },
  {
    title: "AI & Automation",
    desc: "Data-driven automation and intelligent business solutions.",
  },
];

const steps = [
  "Discovery & Planning",
  "Design & Architecture",
  "Development & Testing",
  "Deployment & Support",
];

/* ================= PAGE ================= */

export default function Services() {
  return (
    <section className="bg-[#0B1120] text-gray-200">

      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Our <span className="text-blue-500">Services</span><br />
          Built for Modern Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg"
        >
          We deliver end-to-end digital solutions that help businesses innovate,
          scale, and stay competitive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <Link
            to="/contact"
            className="inline-block px-10 py-4 rounded-full bg-blue-600
                       hover:bg-blue-700 text-white font-medium transition-all
                       shadow-lg shadow-blue-600/30"
          >
            Discuss Your Project
          </Link>
        </motion.div>
      </div>

      {/* ================= SERVICES GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard title={service.title} desc={service.desc} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= PROCESS ================= */}
      <div className="bg-[#111827] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
            Our Delivery Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-blue-500 text-3xl font-bold mb-4">
                  {i + 1}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {step}
                </h4>
                <p className="text-gray-400 text-sm">
                  Structured, transparent, and quality-driven execution.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="max-w-7xl mx-auto px-6 py-28 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ready to Build Something Powerful?
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Partner with us to transform your ideas into scalable digital products.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-8 px-10 py-4 rounded-full bg-blue-600
                     hover:bg-blue-700 text-white font-medium transition-all
                     shadow-lg shadow-blue-600/30"
        >
          Contact Us
        </Link>
      </div>

    </section>
  );
}
