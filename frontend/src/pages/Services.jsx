import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineCloud,
  HiOutlineSparkles,
  HiOutlineDeviceMobile,
  HiOutlineCog
} from "react-icons/hi";

const CountUp = ({ to }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1], // ultra smooth
    });

    return controls.stop;
  }, [to]);

  return <motion.span>{rounded}</motion.span>;
};

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered", animate: true },
  { value: 5, suffix: "+", label: "Core Technologies", animate: true },
  { value: "24/7", suffix: "", label: "Support & Monitoring", animate: false },
  { value: 2024, suffix: "", label: "Founded & Scaling", animate: true },
];

/* ================= DATA ================= */

const services = [
  {
    title: "Custom Software Development",
    desc: "Secure, scalable software tailored to complex business needs.",
    icon: HiOutlineCode,
    points: ["Scalable Architecture", "Secure APIs", "Modern Frameworks"],
  },
  {
    title: "Cloud Platforms",
    desc: "AWS, Azure & GCP solutions with cloud-native best practices.",
    icon: HiOutlineCloud,
    points: ["Cloud-Native Design", "High Availability", "Cost Optimization"],
  },
  {
    title: "DevOps & Infrastructure",
    desc: "CI/CD pipelines, monitoring, and reliable cloud infrastructure.",
    icon: HiOutlineCog,
    points: ["CI/CD Pipelines", "Monitoring & Logs", "Infrastructure as Code"],
  },
  {
    title: "AI & Automation",
    desc: "AI-driven workflows, analytics, and intelligent automation.",
    icon: HiOutlineSparkles,
    points: ["Workflow Automation", "AI Integrations", "Smart Analytics"],
  },
  {
    title: "Mobile App Development",
    desc: "High-performance Android & iOS apps with seamless UX.",
    icon: HiOutlineDeviceMobile,
    points: ["iOS & Android", "Cross-Platform Apps", "Performance Focused"],
  },
  {
    title: "Backend & Databases",
    desc: "Robust APIs, databases, and system architecture built for scale.",
    icon: HiOutlineServer,
    points: ["High-Performance APIs", "Optimized Databases", "System Design"],
  }
];




/* ================= PAGE ================= */

export default function Services() {
  return (
    <section className="bg-[#0B1120] text-gray-200">

      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT: TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Engineering
              <span className="block text-blue-500">
                Scalable Digital Solutions
              </span>
              for Modern Businesses
            </h1>

            <p className="mt-5 text-gray-400 text-lg max-w-xl leading-relaxed">
              We partner with startups and enterprises to design, build, and scale
              secure software products using modern engineering practices.
            </p>

            <div className="mt-8">
              <Link
                to="/about"
                className="px-8 py-3 rounded-full bg-blue-600
                     hover:bg-blue-700 text-white font-medium
                     transition-all shadow-lg shadow-blue-600/30"
              >
                Schedule a Free Consultation →
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: STATS / SIGNALS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:grid grid-cols-2 gap-6"
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="bg-[#111827] border border-blue-500/15
      rounded-2xl p-6 text-center
      hover:border-cyan-400/40 transition-all"
              >
                <div className="text-3xl font-bold text-blue-400">
                  {item.animate ? (
                    <>
                      <CountUp to={item.value} />
                      {item.suffix}
                    </>
                  ) : (
                    item.value
                  )}
                </div>

                <div className="mt-2 text-sm text-gray-400">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="
                  bg-[#111827]
                  border border-blue-500/10
                  rounded-2xl
                  p-6
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]
                  transition-all
                "
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10
                                flex items-center justify-center mb-4">
                  <Icon className="text-blue-400 text-2xl" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.desc}
                </p>

                {/* ===== Capabilities ===== */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.points.map((point) => (
                    <span
                      key={point}
                      className="
        px-3 py-1 text-xs rounded-full
        bg-blue-500/10 text-blue-400
        border border-blue-500/20
        hover:bg-blue-500/20
        transition-all
      "
                    >
                      {point}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ================= CTA ================= */}
<div className="py-24 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10">
  <div className="max-w-7xl mx-auto px-6">

    {/* CTA CARD */}
    <div
      className="
        relative overflow-hidden group
        grid md:grid-cols-2 gap-12 items-center
        bg-[#111827]
        border border-blue-500/20
        rounded-3xl p-10 md:p-14
        transition-transform duration-500
        hover:-translate-y-1
      "
    >
      {/* ===== Card glow (on hover) ===== */}
      <span
        className="
          absolute inset-0
          bg-gradient-to-r from-blue-600/20 via-transparent to-indigo-600/20
          opacity-0 group-hover:opacity-100
          transition-opacity duration-700
        "
      />

      {/* ===== Ambient radial lights INSIDE card ===== */}
      <span
        className="
          absolute -top-24 -right-24
          w-80 h-80
          bg-blue-600/30
          rounded-full
          blur-3xl
          opacity-60
          pointer-events-none
        "
      />
      <span
        className="
          absolute -bottom-24 -left-24
          w-80 h-80
          bg-indigo-600/30
          rounded-full
          blur-3xl
          opacity-60
          pointer-events-none
        "
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Ready to Build With an
          <span className="text-blue-500"> AI-Augmented Partner?</span>
        </h2>

        <p className="mt-5 text-gray-400 text-lg leading-relaxed max-w-xl">
          Let’s discuss your vision. Schedule a free, no-obligation consultation
          with our senior solutions architects to explore how our flexible
          engineering teams can turn your idea into a market-leading reality.
        </p>
      </div>

      <div className="relative z-10">
        <ul className="space-y-4 text-gray-300 text-base">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
            No-obligation consultation
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
            Senior solutions architect (not sales)
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
            Response within 1 business day
          </li>
        </ul>

        <Link
          to="/about"
          className="
            inline-block mt-8 px-10 py-4 rounded-full
            bg-blue-600 hover:bg-blue-700
            text-white font-semibold text-lg
            transition-all
            shadow-lg shadow-blue-600/30
            hover:scale-[1.03]
          "
        >
          Schedule Your Free Consultation →
        </Link>
      </div>
    </div>
  </div>
</div>



    </section>
  );
}